import React, { useEffect, useState } from "react";
import homeimg from "../assets/images/home.png";
import About from "../components/HomePage-components/About";
import Search from "../components/HomePage-components/Search";
import BodyPartContext from '../util/context';
import Exercices from "../components/HomePage-components/Exercices";
import Footer from "../components/HomePage-components/Footer";
import Chatgpt from "../util/chatgpt";
import Navbar from "../components/HomePage-components/Navbar";


function Home() {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);


  return (
    <>
      <div
        className="wrapper z-10"
        style={{
          backgroundImage: `url(${homeimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -999,
        }}
      >
    

        <header>
          <img
            className="background grayscale"
            src={homeimg}
            alt=""
            style={{
              display: "none",
            }}
          />
        </header>
        <section className="bg-[#525252] bg-gradient-to-b from-50% from-[#060606] to-[#5a5959] ">
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
