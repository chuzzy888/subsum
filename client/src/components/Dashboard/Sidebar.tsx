import logo from "../../assets/images/logo.png";
import { MdDashboard, MdElectricBolt } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosCall, IoIosWifi } from "react-icons/io";
import { FiTv } from "react-icons/fi";
import { LuArrowUpLeftFromCircle, LuNewspaper } from "react-icons/lu";

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#EFF3FB] h-screen fixed top-0 left-0">
      <div className="p-4">
        <img src={logo} alt="Logo" className="h-8 w-40" />
      </div>

      <nav className="mt-6 flex justify-center flex-col gap-8">
        <Link
          to={"/dashboard"}
          className="flex items-center mx-3 py-2 px-4 text-[#FFFFFF] rounded-md bg-[#4169E1] hover:bg-blue-900 font-medium text-[16px]"
        >
          <p className="mr-3">
            <MdDashboard size={20} className=" text-[#FFFFFF]" />
          </p>
          Dashboard
        </Link>

        <Link
          to={"#"}
          className="flex items-center mx-3 py-1 px-4 text-[#4C689E] rounded-md hover:bg-gray-200 font-medium text-[16px]"
        >
          <p className="mr-3">
            <IoIosCall size={20} className=" text-[#6882B6]" />
          </p>
          Buy Airtime
          <span className=" ms-7">
            <IoIosArrowDown color="#4169E1" />
          </span>
        </Link>

        <Link
          to={"#"}
          className="flex items-center mx-3 py-1 px-4 text-[#4C689E] rounded-md hover:bg-gray-200 font-medium text-[16px]"
        >
          <p className="mr-3">
            <IoIosWifi size={20} className=" text-[#6882B6]" />
          </p>
          Buy Data
          <span className=" ms-7">
            <IoIosArrowDown color="#4169E1" />
          </span>
        </Link>

        <Link
          to={"#"}
          className="flex items-center mx-3 py-1 px-4 text-[#4C689E] rounded-md hover:bg-gray-200 font-medium text-[16px] whitespace-nowrap"
        >
          <p className="mr-3">
            <FiTv size={20} className=" text-[#6882B6]" />
          </p>
          TV Subscription
          <span className=" ms-5">
            <IoIosArrowDown color="#4169E1" />
          </span>
        </Link>

        <Link
          to={"#"}
          className="flex items-center mx-3 py-1 px-4 text-[#4C689E] rounded-md hover:bg-gray-200 font-medium text-[16px] whitespace-nowrap"
        >
          <p className="mr-3">
            <MdElectricBolt size={20} className=" text-[#6882B6]" />
          </p>
          Pay Electric Bill
          <span className=" ms-7">
            <IoIosArrowDown color="#4169E1" />
          </span>
        </Link>

        <Link
          to={"/airtime-cash"}
          className="flex items-center mx-3 py-1 px-4 text-[#4C689E] rounded-md hover:bg-gray-200 font-medium text-[16px]"
        >
          <p className="mr-3">
            <LuArrowUpLeftFromCircle size={20} className=" text-[#6882B6]" />
          </p>
          Airtime to Cash
        </Link>

        <Link
          to={"/transaction-history"}
          className="flex items-center mx-3 py-1 px-4 text-[#4C689E] rounded-md hover:bg-gray-200 font-medium text-[16px]"
        >
          <p className="mr-3">
            <LuNewspaper size={20} className=" text-[#6882B6]" />
          </p>
          Transaction History
        </Link>

        <Link
          to={"/help-support"}
          className="flex items-center mx-3 py-1 px-4 text-[#4C689E] rounded-md hover:bg-gray-200 font-medium text-[16px]"
        >
          <p className="mr-3">
            <BiSupport size={20} className=" text-[#6882B6]" />
          </p>
          Help & Support
        </Link>
      </nav>

      <div className="absolute bottom-10 left-0 w-full  ">
        <Link to={"/login"}>
          <button className="flex items-center mx-3 py-1 px-4 text-[#4C689E] rounded-md hover:bg-gray-200 font-medium text-[16px]">
            <p className="mr-3">
              <MdLogout />
            </p>
            Log Out
            <span className=" ms-14">
              <IoIosArrowDown color="#4169E1" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
