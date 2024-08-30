import cam from "../../assets/images/cam.png";
import { IoCameraOutline } from "react-icons/io5";
import { FiCopy } from "react-icons/fi";

export default function Profile() {
  return (
    <div className="p-8 ml-64 ">
      <main className="flex items-center gap-10">
        <div className="flex flex-col gap-5">
          <div className=" px-28 p-4 bg-white flex flex-col gap-3.5 justify-center items-center rounded-2xl border border-[#D7E1F4]">
            <div>
              <img src={cam} alt="" />
            </div>
            <span className="flex items-center text-[#4169E1] gap-1">
              <IoCameraOutline className="text-[#4169E1]" />
              <p>Upload Image</p>
            </span>
          </div>

          <div className="  p-4 bg-white  rounded-2xl border border-[#D7E1F4]">
            <span className="flex justify-between items-center py-1">
              <p className="text-[#4C689E]">Name </p>{" "}
              <p className="text-[#4C689E]">Lawal Wahab Babatunde</p>
            </span>
            <span className="flex justify-between items-center py-1">
              <p className="text-[#4C689E]">Email</p>{" "}
              <p className="text-[#4C689E]">wabdotmail@gmail.com</p>
            </span>
            <span className="flex justify-between items-center py-1">
              <p className="text-[#4C689E]">Phone Number </p>{" "}
              <p className="text-[#4C689E]">0906 856 2949</p>
            </span>
            <span className="flex justify-between items-center py-1">
              <p className="text-[#4C689E]">Account Status </p>{" "}
              <p className="text-[#2DAE32]">Active</p>
            </span>
            <span className="flex justify-between items-center py-1">
              <p className="text-[#4C689E] font-[400px]">Referral link </p>{" "}
              <p className="text-[#4C689E] font-[600px]">
                www.subsum.com/tre/wd...
              </p>
            </span>
            <span className="flex justify-end items-center ">
              <p className="text-[#4169E1] flex items-center gap-0.5">
                <FiCopy /> copy{" "}
              </p>{" "}
            </span>
            <span className="flex justify-start items-center ">
              <p className="text-[#4169E1]">Edit Details </p>{" "}
            </span>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-4 rounded-full p-2 border border-[#D7E1F4]">
            <button className="py-2 px-7 bg-[#EFF5FB] text-[#3C517C] rounded-full">
              Change Password
            </button>
            <button className="py-2 px-11  text-[#A9BADA] rounded-full  border border-[#EFF5FB]">
              Change PIN
            </button>
          </div>
          <div className="p-6 w-96 bg-white rounded-2xl border border-[#D7E1F4]">
            <form className="space-y-4">
              <div>
                <label className="block text-[#4C689E]">Current Password</label>
                <input
                  type="password"
                  placeholder="Enter Current Password"
                  className="w-full mt-2 p-2  border  border-[#D7E1F4] rounded"
                />
              </div>
              <div>
                <label className="block text-[#4C689E]">New Password</label>
                <input
                  type="password"
                  placeholder="Enter New Password"
                  className="w-full mt-2 p-2 border  border-[#D7E1F4] rounded"
                />
              </div>
              <div>
                <label className="block text-[#4C689E]">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  placeholder="Enter New Password"
                  className="w-full mt-2 p-2 border border-[#D7E1F4] rounded"
                />
              </div>
              <button className="w-full py-2 px-4 bg-[#4169E1] text-[#F7F9FD] rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
