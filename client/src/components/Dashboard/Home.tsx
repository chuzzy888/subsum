import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen bg-black text-white flex justify-center items-center flex-col">
      <h3 className="text-xl font-black">Fresh Tech Innovation</h3>
      <h3>
        Subsum Project <span className="text-2xl font-black"> /</span>
        <Link to={"/dashboard"} className="text-blue-500">
          please click to view
        </Link>
        <span className="text-2xl font-black"> /</span>
        <Link to={"/login"}>Login</Link>
      </h3>
    </div>
  );
}
