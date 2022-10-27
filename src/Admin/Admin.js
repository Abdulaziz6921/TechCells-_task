import React from 'react'
import { employees } from "../static_data"

function Admin() {
    return (
        <div>
            {employees.map(item => {
                return <div className="">
                    <h1>{item.id}</h1>
                    <h1>{item.name}</h1>
                    <h1>{item.pin}</h1>
                </div>
            })}

        </div>
    )
}

export default Admin