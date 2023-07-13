import { useContext, createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup,  signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, setPersistence, browserLocalPersistence } from "firebase/auth";
import { auth, db } from '../firebase';
import { setDoc, doc, getDoc, updateDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  async function googleSignIn(userData) {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
      const userRef = doc(db, 'data', user.email);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          savedshow: [{
            age: userData.age,
            weight: userData.weight,
            level: userData.level,
            injuries: userData.injuries,
            goals: userData.goals,
            height: userData.height,
          }]
        });
      } else {
        const savedShow = userSnap.data().savedshow || [];
        await updateDoc(userRef, {
          savedshow: [
            ...savedShow,
            {
              age: userData.age,
              weight: userData.weight,
              level: userData.level,
              injuries: userData.injuries,
              goals: userData.goals,
              height: userData.height,
            }
          ]
        });
      }
      console.log('Successfully signed in with Google:', user);
    } catch (error) {
      setError('Error signing in with Google');
      console.log(error);
    }
  }

  const login = async (email, password, rememberMe) => {
    try {
      const authResult = await signInWithEmailAndPassword(auth, email, password);
      const user = authResult.user;
      console.log('Successfully logged in with email and password');
      // Set the "remember me" persistence mode based on the checkbox value
      const persistenceMode = rememberMe ? browserLocalPersistence : null;
      if (persistenceMode) {
        await setPersistence(auth, persistenceMode);
      }
      setUser(user);
    } catch (error) {
      setError('Error logging in with email and password');
      console.log(error.code);
    }
  };

  const signup = async (userData) => {
    try {
      const { email, password, age, weight, level, injuries, goals, height } = userData;
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      setUser(user);
      const userRef = doc(db, 'data', email);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          savedshow: [{
            age,
            weight,
            level,
            injuries,
            goals,
            height,
          }]
        });
      } else {
        await updateDoc(userRef, {
          savedshow: [
            ...userSnap.data().savedshow,
            {
              age,
              weight,
              level,
              injuries,
              goals,
              height,
            }
          ]
        });
      }
      console.log('Successfully signed up:', email);
    } catch (error) {
      setError('Error signing up');
      console.log(error);
    }
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser({ currentUser });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, signup, login, logOut, user, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
