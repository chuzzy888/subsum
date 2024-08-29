import React from "react";
import faq from "../../assets/images/faq.png";
import ros from "../../assets/images/ros.png";
import phc from "../../assets/images/phc.png";
import str from "../../assets/images/str.png";
import whs from "../../assets/images/whs.png";
import rvw from "../../assets/images/rvw.png";

export default function Help() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-6 p-4  mx-56 ml-64">
        <div className="flex items-center max-w-sm p-4 border border-[#D7E1F4] rounded-lg shadow-sm bg-white">
          <div className=" p-3 rounded-full mr-4">
            <img src={faq} alt="" />
          </div>
          <div>
            <h4 className="text-[#6882B6] font-medium">
              Frequently Asked Questions
            </h4>
            <p className="text-[#4169E1]">See FAQ &rarr;</p>
          </div>
        </div>

        <div className="flex items-center max-w-sm p-4 border border-[#D7E1F4] rounded-lg shadow-sm bg-white">
          <div className=" p-3 rounded-full mr-4">
            <img src={str} alt="" />
          </div>
          <div>
            <h4 className="text-[#6882B6] font-medium">Live Chat</h4>
            <p className="text-[#4169E1]">Chat Now &rarr;</p>
          </div>
        </div>

        <div className="flex items-center max-w-sm p-4 border border-[#D7E1F4] rounded-lg shadow-sm bg-white">
          <div className="p-3 rounded-full mr-4">
            <img src={whs} alt="" />
          </div>
          <div>
            <h4 className="text-[#6882B6] font-medium">Whatsapp</h4>
            <p className="text-[#4169E1]">Drop a Message &rarr;</p>
          </div>
        </div>

        <div className="flex items-center max-w-sm p-4 border border-[#D7E1F4] rounded-lg shadow-sm bg-white">
          <div className=" p-3 rounded-full mr-4">
            <img src={phc} alt="" />
          </div>
          <div>
            <h4 className="text-[#6882B6] font-medium">Phone Call</h4>
            <p className="text-[#4169E1]">Call Us &rarr;</p>
          </div>
        </div>

        <div className="flex items-center max-w-sm p-4 border border-[#D7E1F4] rounded-lg shadow-sm bg-white">
          <div className=" p-3 rounded-full mr-4">
            <img src={ros} alt="" />
          </div>
          <div>
            <h4 className="text-[#6882B6] font-medium">Report Our Support</h4>
            <p className="text-[#4169E1]">Not Satisfied? &rarr;</p>
          </div>
        </div>

        <div className="flex items-center max-w-sm p-4 border border-[#D7E1F4] rounded-lg shadow-sm bg-white">
          <div className=" p-3 rounded-full mr-4">
            <img src={rvw} alt="" />
          </div>
          <div>
            <h4 className="text-[#6882B6] font-medium">Review Our App</h4>
            <p className="text-[#4169E1] bg-[#EFF3FB] text-center rounded-full">
              Coming Soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
