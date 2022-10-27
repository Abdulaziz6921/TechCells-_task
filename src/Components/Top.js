import React from "react";
import logo from "../Images/logo.svg";
import { Link } from "react-router-dom";

function Top() {
  let stl = {
    nav: "w-full md:w-[80%] h-[100px] mx-auto text-[25px] md:text-[35px] font-[600] flex justify-between items-center hover:text-blue-400",
    logo: "w-[180px] h-[75%] object-contain ",
  };
  return (
    <div className={stl.nav}>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <img src={logo} alt="TechCells Logo" className={stl.logo} />
    </div>
  );
}

export default Top;
