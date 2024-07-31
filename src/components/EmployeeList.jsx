import axios from "axios";
import React, { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard/EmployeeCard";

const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://free-ap-south-1.cosmocloud.io/development/api/employee?limit=10&offset=0",
          {
            headers: {
              projectId: "66a9e7cf39e2fdc09bbb9f5d",
              environmentId: "66a9e7cf39e2fdc09bbb9f5e",
            },
          }
        );
        // console.log(response.data.data);
        setEmployee(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    // fetchData();
  }, []);
  // console.log(employee[0]);
  return (
    <div>
      {employee.map((data) => {
        return <EmployeeCard key={data._id} name={data.name} id={data._id} />;
      })}
    </div>
  );
};

export default EmployeeList;
