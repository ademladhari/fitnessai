import React, { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
function Signin({ show, setShow,showLogin,setShowLogin }) {
  const {signup } = UserAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [level, setLevel] = useState('');
  const [injuries, setInjuries] = useState('');
  const [goals, setGoals] = useState('');
  const [height, setHeight] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        email,
        password,
        age,
        weight,
        level,
        injuries,
        height,
        goals,
      };
      await signup(userData);
      navigate('/');
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleAdditionalInfo = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };
  const handleLogin=()=>{
     
     setShowLogin(true)
  }

  return (
    <>
    
 {!showLogin&&(show && (
        <div class="flex-1 xl:ml-[78.6%] ml-[10%] h-[100%] mt-[2.0%]  w-80 fixed  z-50 overflow-scroll hm   ">
          <div class="px-6 pt-6 py-10 lg:px-8 rounded-3xl bg-gradient-to-b from-50% from-[#e2e4e7] to-[#D1D5DB]  backdrop-blur-xl drop-shadow-lg dark:from-[#171717] dark:to-[#515050] ">
            <h3 class="mx-11 pb-6 text-xl font-medium text-center text-gray-900 dark:text-white">Sign in to our platform</h3>
            <form class="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label for="email" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@mail.com"
                  required
                />
              </div>
              <div>
                <label for="password" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              {showAdditionalInfo && (
                <>
                  <div className=''>
                    <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                    <input
                      type="text"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter your age"
                    
                    />
                  </div>
                  <div>
                    <label for="weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight</label>
                    <input
                      type="text"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter your weight"
                
                    />
                  </div>
                  <div>
                  <label for="height" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height</label>
                    <input
                      type="text"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter your goals"
                    
                    />
                    </div>
                  <div>
                    <label for="lvl" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Level</label>
                    <select
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                
                    >
                      <option value="">Select level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label for="injuries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Injuries</label>
                    <input
                      type="text"
                      value={injuries}
                      onChange={(e) => setInjuries(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter any injuries"
                      required
                    />
                  </div>
                  <div>
                    <label for="goals" class="block  text-sm font-medium text-gray-900 dark:text-white">Goals</label>
                    <input
                      type="text"
                      value={goals}
                      onChange={(e) => setGoals(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter your goals"
                      required
                    />
                  </div>
                
                </>
              )}
              <div class="text-center">
                <span class="text-sm font-medium text-gray-500 dark:text-gray-300 cursor-pointer" onClick={handleToggleAdditionalInfo}>
                  {showAdditionalInfo ? 'Less Information' : 'Additional Informations'}
                </span>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
               Sign up
              </button>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Already have an account?{' '}
                <button onClick={handleLogin} class="text-blue-700 hover:underline dark:text-blue-500">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      ))}
    </>
  );
}

export default Signin;
