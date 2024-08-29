import { FiCopy, FiEdit3 } from "react-icons/fi";
import fm from "../../assets/images/fm.png";
import { PiShareFat } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
export default function Dashboard() {
  return (
    <div className="p-8 ml-64 ">
      <main className="flex items-center gap-10">
        <div className="flex flex-col gap-5">
          {" "}
          {/* Wallet Balance Card */}
          <div className="col-span-1 md:col-span-2 p-6 bg-white rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-gray-600">Wallet Balance</h2>
                <p className="text-4xl font-bold">₦3000</p>
              </div>
              <button className="bg-[#4169E1] text-white py-2 px-4 rounded-xl">
                Fund Wallet
              </button>
            </div>
          </div>
          {/* Referral Section */}
          <div className="col-span-1 md:col-span-1 p-6 bg-white rounded-lg shadow">
            <h2 className="text-gray-600">Referral</h2>
            <p className="mt-4 text-gray-700">Referral Code: 18/52ha089</p>
            <div className="mt-4 flex space-x-4">
              <button className="text-blue-500 flex items-center gap-1">
                <FiCopy />
                Copy
              </button>
              <button className="text-blue-500 flex items-center gap-1">
                <FiEdit3 />
                Edit
              </button>
              <button className="text-blue-500 flex items-center gap-1">
                <PiShareFat />
                Share
              </button>
            </div>
          </div>
          {/* Referrals Made Section */}
          <div className=" p-6  bg-white rounded-lg shadow">
            <div className="flex justify-between gap-6 items-center">
              <div>
                <h2 className="text-gray-600">Total referrals made</h2>
                <p className="text-4xl font-bold">0</p>
              </div>
              <div>
                <h2 className="text-gray-600">Current wallet Bonus</h2>
                <p className="text-4xl font-bold">₦0.00</p>
              </div>
            </div>
            <button className="mt-4  text-[#4169E1]  py-2  rounded flex items-center gap-1">
              <IoWalletOutline />
              Cashout
            </button>
          </div>
        </div>
        {/* Cards Section */}
        <div className="p-6 bg-white rounded-lg mb-36 shadow">
          <img
            src={fm}
            alt="No Saved Cards"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
      </main>
    </div>
  );
}
