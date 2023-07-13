// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxsAPNmA5xo6qBRxC_Sa0uQn_jAUaMmH4",
  authDomain: "fitness-app-cb455.firebaseapp.com",
  projectId: "fitness-app-cb455",
  storageBucket: "fitness-app-cb455.appspot.com",
  messagingSenderId: "528153614065",
  appId: "1:528153614065:web:b1dbc6739737d7d8be7b50",
  measurementId: "G-6E5B7785CH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app)

