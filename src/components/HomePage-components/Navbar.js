import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function Navbar({ setShow, show }) {
  const { user, logOut } = UserAuth();
  const {  exercisesSectionRef,aboutSectionRef,contactSectionRef } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
 


  return (
    <div className="flex flex-row justify-between bg-gradient-to-r   from-gray-300 to-gray-400  fixed  -top-0 h-[55px] xl:h-[55px] md:h-[40px] w-[100%]  z-10 dark:from-[#171717] dark:to-[#515050]">
      <div className="flex flex-row  items-center py-3">
        <Link
          to="/"
          className="xl:text-lg font-semibold  text-gray-800 mx-4 dark:text-gray-300  text-base "
        >
          Home
        </Link>
       
        <div   onClick={() => aboutSectionRef.current.scrollIntoView({ behavior: "smooth" })}className="xl:text-lg text-base dark:text-gray-300 font-semibold text-gray-800 xl:mx-4 mx-2">
          About
        </div>
        <div   onClick={() => exercisesSectionRef.current.scrollIntoView({ behavior: "smooth" })} className="xl:text-lg text-base dark:text-gray-300 font-semibold text-gray-800 xl:mx-4 mx-2">
          Exercises
        </div>
        <div   onClick={() => contactSectionRef.current.scrollIntoView({ behavior: "smooth" })}className="xl:text-lg dark:text-gray-300 text-base font-semibold text-gray-800 xl:mx-4 mx-2">
          Contact
        </div>
        </div>
        <div className="">
        {user.email ? (
  <button
    className="ml-auto px-4 py-2 bg-red-500 text-white dark:text-gray-300 rounded-md"
    onClick={handleSignOut}
  >
    Log Out
  </button>
) : (
  <>
  <button
      className="flex align-middle xl:mt-1 xl:mb-1 xl:py-2 xl:text-lg lg:text-base md:mt-[8%] md:p-2 sm:p-2 sm:mt-3 mt-[25%]    mr-1 lg:mt-[10%] py-0.5 px-2 xl:px-4 text-xs font-medium bg-blue-500 text-white rounded-md"
      onClick={() => setShow(!show)}
    >
      {!show ? (
        <>
          <FaArrowDown color="white" className="xl:mr-3 mr-1 xl:pt-0.5 xl:pb-0 pb-0.5 mt-1 dark:text-gray-300   text-gray-800" />
          Login
        </>
      ) : (
        <>
          <FaArrowUp color="white" className="xl:mr-3 mr-1 xl:pt-0.5 pb-0.5 xl:pb-0 mt-1 dark:text-gray-300 text-gray-800" />
          Login
        </>
      )}
    </button>
  
  </>
)}
</div>
  
     
    </div>
  );
}

export default Navbar;
