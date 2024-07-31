import axios from "axios";
import React, { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard/EmployeeCard";

const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);
  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "https://free-ap-south-1.cosmocloud.io/development/api/employee?limit=10&offset=0",
        {
          headers: {
            projectId: import.meta.env.VITE_PROJECT_ID,
            environmentId: import.meta.env.VITE_ENVIRONMENT_ID,
          },
        }
      );
      setEmployee(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandler = async (id) => {
    try {
      await axios.delete(
        `https://free-ap-south-1.cosmocloud.io/development/api/employee/${id}`,
        {
          headers: {
            projectId: import.meta.env.VITE_PROJECT_ID,
            environmentId: import.meta.env.VITE_ENVIRONMENT_ID,
          },
          data: {},
        }
      );
      alert("Employee Deleted Successfully");
      fetchEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);
  return (
    <div>
      {employee.length === 0 ? (
        <p className="no-employee">No Employees in the system</p>
      ) : (
        employee.map((data) => (
          <EmployeeCard
            key={data._id}
            name={data.name}
            id={data._id}
            deleteHandler={() => deleteHandler(data._id)}
          />
        ))
      )}
    </div>
  );
};

export default EmployeeList;
