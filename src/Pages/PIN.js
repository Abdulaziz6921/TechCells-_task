import React from "react";
import { Link } from "react-router-dom";

import Top from "../Components/Top";

function PIN() {
  let stl = {
    size: "w-full h-[100vh] text-txt",

    container:
      "w-[90%] md:w-[60%] lg:w-[40%] h-[350px] flex flex-col justify-evenly items-center mt-[100px] mx-auto",
    input: "w-[120px] h-[50px] text-[22px] outline-none indent-[4px]",
    btn: "w-[150px] h-[50px] md:w-[180px] md:h-[70px] bg-secondary text-[22px]  md:text-[24px] text-white hover:bg-white hover:text-secondary hover:border-secondary hover:border-2 duration-700 hover:duration-700 rounded-md",
  };

  return (
    <div className={stl.size}>
      <Top />

      <div className={stl.container} id="shadow">
        <h1 className="text-[30px] md:text-[37px] font-bold">Enter your PIN</h1>

        <input type="password" maxLength={4} className={stl.input} id="input" />
        <Link to="/clocked_in">
          <button className={stl.btn}>Submit</button>
        </Link>
      </div>
    </div>
  );
}

export default PIN;
