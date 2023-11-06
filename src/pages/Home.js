import React, {  useState } from "react";
import homeimg from "../assets/images/home.png";
import About from "../components/HomePage-components/About";
import Search from "../components/HomePage-components/Search";
import BodyPartContext from '../util/context';
import Exercices from "../components/HomePage-components/Exercices";
import Footer from "../components/HomePage-components/Footer";
import { UserAuth } from "../context/AuthContext";



function Home() {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  const {  aboutSectionRef } = UserAuth();



  return (
    <>
   <div class="relative z-10   h-screen   overflow-x-hidden ">
  <div class=" inset-0  bg-no-repeat bg-top bg-cover  xl:h-[100vh] sm:pt-0 scale-y-110  pt-36 bg-black md:h-[70vh] sm:h-[70vh]  h-[25vh]   w-full md:w-full      " style={{
          backgroundImage:` url(${homeimg})`,

          zIndex: -999,
        }}></div>
       
    
  
  
        <section className="bg-[#525252] bg-gradient-to-b from-50% from-[#060606] to-[#5a5959] " ref={aboutSectionRef}>
          <About />
        </section>
        <BodyPartContext.Provider
          value={{
            bodyPart,
            setBodyPart,
            exercises,
            setExercises,
          }}
        >
          <Search />
          <Exercices isbodyparts />
          <Footer />
        </BodyPartContext.Provider>
      </div>
    </>
  );
}

export default Home;
