import { createContext, useState } from "react";

export const EmployeesContext = createContext()



export const EmployeesProvider = ({ children }) => {
    const [employee, setEmployee] = useState("asdadasdsa")
    const [admin, setAdmin] = useState(false)


    return <EmployeesContext.Provider value={{ employee, setEmployee, setAdmin, admin }}>{children}</EmployeesContext.Provider>
}