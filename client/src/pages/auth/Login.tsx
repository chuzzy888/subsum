import lfts from "../../assets/images/lfts.png";
import gg from "../../assets/images/gg.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/3 lg:w-1/4  md:block hidden ">
        <img
          src={lfts}
          alt="Sidebar Image"
          className="h-full w-full object-cover "
        />
      </div>

      <div className="flex-1   bg-[#EFF3FB] p-6 flex flex-col  items-center">
        <div className="w-full p-5 flex justify-between items-center ">
          <Link to={"/dashboard"}>
            <button className="text-[#4169E1] font-medium flex  items-center">
              <MdKeyboardArrowLeft className="text-lg mt-0.5" />
              Home
            </button>
          </Link>
          <button className="bg-[#4169E1] text-[#F7F9FD] py-2 px-8 rounded-xl">
            Sign Up
          </button>
        </div>

        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-[#4C689E] text-center">
            Login
          </h2>
          <button className="bg-[#FFFFFF] text-[#2B3B5A] border border-gray-300 py-2 px-4 w-full mb-4 flex items-center justify-center rounded-xl">
            <img src={gg} alt="Google Logo" className="w-6 h-6 mr-2" />
            Login with Google
          </button>
          <div className=" mt-6 flex items-center justify-center gap-4">
            <div className=" h-[0.5px] w-32 bg-[#A9BADA]"></div>
            <p className=" text-xs text-[#1B2437]"> Or continue with</p>
            <div className=" h-[0.5px] w-32 bg-[#A9BADA]"></div>
          </div>{" "}
          <form className="bg-white p-8 rounded-xl mt-5">
            <div className="mb-4 ">
              <label
                className="block text-[#4C689E] text-sm mb-2"
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
                className="block text-[#4C689E] text-sm mb-2"
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
              <div className="flex items-center">
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-[#FFFFFF] border-2 birder-[#EFF3FB] appearance-none cursor-pointer"
                  />
                  <label
                    htmlFor="toggle"
                    className="toggle-label block overflow-hidden h-5 rounded-full bg-[#EFF3FB] cursor-pointer"
                  ></label>
                </div>

                <label htmlFor="toggle" className="text-[14px] text-[#6882B6]">
                  Remember me
                </label>
              </div>
              <button className="text-[#EE5D50]">Recover Password</button>
            </div>
            <Link to={"/dashboard"}>
              <button className="bg-[#4169E1] text-white w-full py-2 px-4 rounded-xl">
                Log in
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
