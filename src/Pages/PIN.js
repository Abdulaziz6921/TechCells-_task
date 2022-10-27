import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { employees } from "../static_data"
import Top from "../Components/Top";
import { EmployeesContext } from "../context/employees";


function PIN() {
  const { setEmployee } = useContext(EmployeesContext)

  const navigate = useNavigate()
  const [inputData, setInputData] = useState("")
  // console.log(inputData)
  let stl = {
    size: "w-full h-[100vh] text-txt",

    container:
      "w-[90%] md:w-[60%] lg:w-[40%] h-[500px] flex flex-col justify-evenly items-center mt-[50px] mx-auto",
    input: "w-[120px] h-[50px] text-[22px] outline-none indent-[4px]",
    btn: "w-[150px] h-[50px] md:w-[180px] md:h-[70px] bg-secondary text-[22px]  md:text-[24px] text-white hover:bg-white hover:text-secondary hover:border-secondary hover:border-2 duration-700 hover:duration-700 rounded-md",
    numbers: "border-2 border-secondary p-2 w-[50px] aspect-square cursor-pointer flex items-center justify-center rounded-full hover:bg-secondary hover:text-white duration-300"
  };


  const TypeNumber = (e) => {
    // console.log("number :", e.target.innerText)
    setInputData(inputData + e.target.innerText)
  }


  const SubmitPassword = () => {
    console.log(inputData)
    console.log(employees)
    const filteredData = employees.filter(employee => {
      return employee.pin === inputData
    })
    if (filteredData.length) {
      console.log(filteredData)
      setEmployee(filteredData)
      navigate("/clocked_in")

    }
  }
  return (
    <div className={stl.size}>
      <Top />

      <div className={stl.container} id="shadow">
        <h1 className="text-[30px] md:text-[37px] font-bold">Enter your PIN</h1>

        <input type="text" value={inputData} maxLength={4} className={stl.input} onChange={(e) => setInputData(e.target.value)} id="input" />
        <div className="w-[400px] h-[400px] border-2 border-blue-400 grid grid-cols-3 gap-[20px] place-items-center p-3">
          <div className={stl.numbers} onClick={TypeNumber} >1</div>
          <div className={stl.numbers} onClick={TypeNumber} >2</div>
          <div className={stl.numbers} onClick={TypeNumber}>3</div>
          <div className={stl.numbers} onClick={TypeNumber}>4</div>
          <div className={stl.numbers} onClick={TypeNumber}>5</div>
          <div className={stl.numbers} onClick={TypeNumber}>6</div>
          <div className={stl.numbers} onClick={TypeNumber}>7</div>
          <div className={stl.numbers} onClick={TypeNumber}>8</div>
          <div className={stl.numbers} onClick={TypeNumber}>9</div>
          <div className={stl.numbers} >*</div>
          <div className={stl.numbers} onClick={TypeNumber}>0</div>
          <div className={stl.numbers} >#</div>



        </div>

        {/* <Link to="/clocked_in"> */}

        <button className={stl.btn} onClick={SubmitPassword}>Submit</button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default PIN;
