import React from "react";
import { Link } from "react-router-dom";
import Top from "../Components/Top";
import checked from "../Images/checkmark.webp";

function In() {
  let stl = {
    size: "w-full h-[100vh] text-txt",
    container:
      "w-[90%] md:w-[60%] lg:w-[40%] h-[350px] flex flex-col justify-evenly items-center mt-[100px] mx-auto",
    note: "flex w-fit h-fit items-center",
    img: "h-[20px] w-[20px] object-contain mr-[10px]",
    btn: "w-[150px] h-[50px] md:w-[180px] md:h-[70px] bg-secondary text-[22px]  md:text-[24px] text-white hover:bg-white hover:text-secondary hover:border-secondary hover:border-2 duration-700 hover:duration-700 rounded-md",
  };
  return (
    <div className={stl.size}>
      <Top />

      <div className={stl.container} id="shadow">
        <h1 className="text-[30px] md:text-[37px] font-bold">Hello,</h1>
        <div className={stl.note}>
          <img src={checked} alt="checkmark" className={stl.img} />
          <p className>You have clocked in successfully </p>
        </div>

        <Link to="/clocked_out">
          <button className={stl.btn}>Clock out</button>
        </Link>
      </div>
    </div>
  );
}

export default In;
