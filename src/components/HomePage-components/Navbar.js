import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function Navbar({ setShow, show }) {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-around bg-gray-300 w-full fixed -top-0  z-10">
      <div className="flex flex-row justify-center items-center py-3">
        <Link
          to="/"
          className="text-lg font-semibold text-gray-800 mx-4 border-b-4 border-red-500"
        >
          Home
        </Link>
        <a href="exercises" className="text-lg font-semibold text-gray-800 mx-4">
          Exercises
        </a>
        <a href="about" className="text-lg font-semibold text-gray-800 mx-4">
          About
        </a>
        <a href="contact" className="text-lg font-semibold text-gray-800 mx-4">
          Contact
        </a>
      </div>
      <div className="flex items-center ml-auto mt-1 mr-4">
      {user.email ? (
  <button
    className="ml-auto px-4 py-2 bg-red-500 text-white rounded-md"
    onClick={handleSignOut}
  >
    Log Out
  </button>
) : (
  <>
    <button
      className="px-4 flex align-middle py-2 text-lg font-medium bg-blue-500 text-white rounded-md"
      onClick={() => setShow(!show)}
    >
      {!show ? (
        <>
          <FaArrowDown color="white" className="mr-3 pt-0.5 mt-1  text-gray-800" />
          Login
        </>
      ) : (
        <>
          <FaArrowUp color="white" className="mr-3 pt-0.5 mt-1 text-gray-800" />
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
