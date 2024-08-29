import React from "react";
import lfts from "../../assets/images/lfts.png";
import gg from "../../assets/images/gg.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
const Login = () => {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-1/3 lg:w-1/4">
        <img
          src={lfts}
          alt="Sidebar Image"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Login Form */}
      <div className="flex-1   bg-[#EFF3FB] p-6 flex flex-col  items-center">
        {/* Top Nav */}
        <div className="w-full p-5 flex justify-between items-center ">
          <button className="text-[#4169E1] font-medium flex  items-center">
            <MdKeyboardArrowLeft className="text-lg mt-0.5" />
            Home
          </button>
          <button className="bg-[#4169E1] text-[#F7F9FD] py-2 px-8 rounded-xl">
            Sign Up
          </button>
        </div>

        {/* Form */}
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-[#4C689E] text-center">
            Login
          </h2>
          <button className="bg-[#FFFFFF] text-[#2B3B5A] border border-gray-300 py-2 px-4 w-full mb-4 flex items-center justify-center rounded-xl">
            <img src={gg} alt="Google Logo" className="w-6 h-6 mr-2" />
            Login with Google
          </button>
          <p className="text-center mb-4 text-[#1B2437] ">Or continue with</p>
          <form className="bg-white p-8 rounded-xl">
            <div className="mb-4 ">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded w-full py-2 px-4"
                placeholder="wabdotmail@gmail.com"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 rounded w-full py-2 px-4"
                placeholder="Gabon4351"
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <button className="text-red-500">Recover Password</button>
            </div>
            <button className="bg-[#4169E1] text-white w-full py-2 px-4 rounded-xl">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
