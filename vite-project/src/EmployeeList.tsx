import React, { useEffect, useState } from "react";

interface Employee {
    name: {
        first: string;
        last: string;
    };
    email: string;
    picture: {
        medium: string;
    };
}

function EmployeeList() {
    const [employees, setEmployees] = useState<Employee[]>([]); 

    useEffect(() => {
        fetch("http://localhost:3310/api/employees")
            .then((response) => response.json())
            .then((data) => {
                console.log("Données reçues :", data);
                setEmployees(data.results); 
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des employés :", error);
            });
    }, []);

    return (
        <div>
            <h1>Liste des employés</h1>
            <ul>
                {employees.map((employee, index) => (
                    <li key={index}>
                        {employee.name.first} {employee.name.last} - {employee.email}
                        <img src={employee.picture.medium} alt="Employee" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EmployeeList;
