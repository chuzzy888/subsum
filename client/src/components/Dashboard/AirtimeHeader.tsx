import { VscBell } from "react-icons/vsc";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AirtimeHeader() {
  return (
    <header className="flex items-center ml-64 justify-between bg-white shadow p-4">
      <h1 className="text-lg font-semibold text-[#2B3B5A]">Airtime To Cash</h1>

      <div className="flex items-center space-x-5">
        <button className=" text-[#4169E1] font-semibold text-[16px]">
          Upgrade To Merchant
        </button>
        <span className="bg-[#EFF3FB] border-2 border-[#F7F9FD ]  h-10 w-10 rounded-full flex justify-center items-center relative">
          <VscBell size={20} color="#4169E1" />
        </span>

        <div className="card">
          <Link to={"/profile"}>
            <span className="bg-[#EFF3FB] border-2 border-[#F7F9FD ] h-10 w-10 rounded-full flex justify-center items-center">
              <FaRegUser size={20} color="#4169E1" />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
