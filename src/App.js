import { Box } from '@mui/material';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import  Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail'
import Navbar from './components/HomePage-components/Navbar';

import { AuthContextProvider } from './context/AuthContext';
import { useState } from 'react';
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";



function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [show, setShow] = useState(false);

 
  return (
    <>    
    
    <Box width="400px" height="100%" sx={{width:{xl:'100%'}}}  >
   
<AuthContextProvider>
<SignUp
          show={show}
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          setShow={setShow}
        ></SignUp>
        <Login
          show={show}
          setShow={setShow}
          setShowLogin={setShowLogin}
          showLogin={showLogin}
        ></Login>

<Routes>
<Route path="/" element={<Home show={show} setShow={setShow} />} />
<Route path="/exercise/:id" element={<ExerciseDetail />} />


</Routes>
<Navbar show={show} setShow={setShow} />
</AuthContextProvider>


    </Box>
    
    </>
  );
}

export default App;
