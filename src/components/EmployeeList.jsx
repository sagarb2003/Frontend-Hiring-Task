import axios from "axios";
import React, { useEffect } from "react";
import EmployeeCard from "./EmployeeCard/EmployeeCard";
import EmployeeForm from "./EmployeeForm";

const EmployeeList = () => {
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
        // console.log(response.data.data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    // fetchData();
  }, []);
  return (
    <div>
      <EmployeeCard />
      <EmployeeForm />
    </div>
  );
};

export default EmployeeList;
