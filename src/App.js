import { BrowserRouter, Routes, Route } from "react-router-dom";
import In from "./Pages/In";
import Out from "./Pages/Out";
import Login from "./Pages/Login";
import PIN from "./Pages/PIN";
import { useContext } from "react"
import { EmployeesContext } from "./context/employees";
import Notfound from "./Pages/Notfound.js";
import Admin from "./Admin/Admin";
import MainPages from "./Pages/MainPages"
function App() {
  const { admin } = useContext(EmployeesContext)
  console.log(admin);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPages />} />
        <Route path="/PIN" element={<PIN />} />
        <Route path="/clocked_in" element={<In />} />
        <Route path="/clocked_out" element={<Out />} />
        <Route path="/admin_login" element={<Login />} />
        <Route path="/admin" element={admin ? <Admin /> : <Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
