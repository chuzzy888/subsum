import React from "react";

export default function AirtimeCash() {
  return (
    <div className="ml-64 p-8 flex flex-col items-center justify-center">
      <div className="mb-6 flex justify-between items-center gap-8  max-w-lg w-full">
        <span className="  border-b-4 border-[#4169E1] text-blue-500">
          Fill Info
        </span>
        <span className="border-b-4 border-[#D7E1F4] text-[#D7E1F4]">
          Make Payment
        </span>
        <span className=" border-b-4 border-[#D7E1F4]  text-[#D7E1F4]">
          View Receipt
        </span>
      </div>

      <div className=" rounded-xl bg-[#F7F9FD] border border-[#D7E1F4] p-8 max-w-lg w-full">
        <h2 className="text-xl text-[#6882B6] font-semibold text-center mb-8">
          Airtime to Cash
        </h2>

        <form>
          <div className="mb-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4 w-full">
                <label
                  className="block text-[#6882B6] text-sm font-bold mb-2"
                  htmlFor="network"
                >
                  Select Network
                </label>
                <div className="relative">
                  <select
                    id="network"
                    name="network"
                    className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="glo">Glo</option>
                    <option value="mtn">MTN</option>
                    <option value="airtel">Airtel</option>
                    <option value="9mobile">9mobile</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 111.414 1.414l-4 4.999a1 1 0 01-1.414 0l-4-4.999a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mb-4 w-full">
                <label
                  className="block text-[#6882B6] text-sm font-bold mb-2"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="08094562627"
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-[#6882B6] text-sm font-bold mb-2"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="₦5,000"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-[#6882B6] text-sm font-bold mb-2"
              htmlFor="pin"
            >
              Airtime Share Pin
            </label>
            <input
              type="text"
              id="pin"
              name="pin"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="3546576433"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#4169E1] text-[#EFF5FB] font-bold py-3 px-4 rounded-xl focus:outline-none focus:shadow-outline hover:bg-blue-600"
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
}
