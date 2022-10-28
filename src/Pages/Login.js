import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EmployeesContext } from "../context/employees";
import logo from "../Images/logo.svg";

function Login() {
  const { setAdmin } = useContext(EmployeesContext);
  const navigate = useNavigate();
  let stl = {
    size: "w-full h-[100vh] text-txt flex flex-col items-center justify-center",
    logo: "w-[180px] h-[80px] object-contain ",
    container:
      "w-[90%] md:w-[60%] lg:w-[40%] h-fit flex flex-col justify-evenly items-center mt-[20px] mx-auto ",
    inputs: "w-[70%] h-fit ",
    input: " mb-[50px] w-full h-[50px] text-[22px] outline-none indent-[4px]",
    btn: "w-[150px] h-[50px] md:w-[180px] md:h-[70px] bg-secondary text-[22px]  md:text-[24px] text-white hover:bg-white hover:text-secondary hover:border-secondary hover:border-2 duration-700 hover:duration-700 rounded-md mb-[30px]",
    btm: "w-[70%] mt-[-40px] mb-[80px] h-fit flex justify-between",
  };

  const myfunc = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (email === "abdulaziztojibayev6@gmail.com" && password === "3676921") {
      setAdmin(true);
      navigate("/admin");
    } else {
      setAdmin(false);
      navigate("/admin");
    }
  };

  return (
    <div className={stl.size}>
      <img src={logo} alt="Logo" className={stl.logo} />
      <form onSubmit={myfunc} className={stl.container} id="shadow">
        <h1 className="text-[30px] md:text-[37px] font-bold my-[35px]">
          Welcome back!
        </h1>

        <div className={stl.inputs}>
          <label htmlFor="email">Email Address</label>
          <input type="email" className={stl.input} id="input" />
          <label htmlFor="password">Password</label>
          <input type="password" className={stl.input} id="input" />
        </div>

        <div className={stl.btm}>
          <p>
            <input type="checkbox" className="mr-[10px]" />
            remember me
          </p>
          <p>Forgot your password?</p>
        </div>

        <button className={stl.btn}>Login</button>
      </form>
    </div>
  );
}

export default Login;
