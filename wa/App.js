import logo from "./Images/logo.svg";
import { Link } from "react-router-dom";

function App() {
  let stl = {
    size: "w-full h-[100vh] text-txt",
    nav: "w-full md:w-[80%] h-[100px] mx-auto text-[25px] md:text-[35px] font-[600] flex justify-between items-center",
    logo: "w-[180px] h-[75%] object-contain",
    container:
      "w-[90%] md:w-[60%] lg:w-[40%] h-[400px] flex flex-col justify-evenly items-center mt-[100px] mx-auto",
    btns: "w-fit h-fit flex flex-col items-center",
    btn: "w-[150px] h-[50px] md:w-[180px] md:h-[70px] bg-secondary text-[22px]  md:text-[24px] text-white hover:bg-white hover:text-secondary hover:border-secondary hover:border-2 duration-700 hover:duration-700 rounded-md",
    text: "text-[24px] md:text-[28px] text-black",
  };
  return (
    <div className={stl.size}>
      <div className={stl.nav}>
        <h1>Easy Checker</h1>
        <img src={logo} alt="TechCells Logo" className={stl.logo} />
      </div>

      <div className={stl.container} id="shadow">
        <h1 className="text-[30px] md:text-[40px] font-bold">
          Welcome to Tech
          <span className="text-secondary">Cells</span>!
        </h1>
        <h3 className={stl.text}>Do you want to clock in/out?</h3>
        <div className={stl.btns}>
          <Link to="/PIN">
            <button className={stl.btn}>Clock in/out</button>
          </Link>
          <p>or</p>
          <Link to="/admin_login">
            <button className={stl.btn}>Admin?</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
