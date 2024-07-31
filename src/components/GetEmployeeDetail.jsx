import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './GetEmployeeDetail.css'

const GetEmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null); // Initialize as null

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://free-ap-south-1.cosmocloud.io/development/api/employee/${id}`,
          {
            headers: {
              projectId: "66a9e7cf39e2fdc09bbb9f5d",
              environmentId: "66a9e7cf39e2fdc09bbb9f5e",
            },
          }
        );
        setEmployee(response.data);
      } catch (error) {
        console.error("Error fetching employee details:", error);
      }
    }

    // fetchData();
  }, [id]);

  if (!employee) {
    return <div className="loader">Loading...</div>; 
  }

  return (
    <div className="employee-card">
      <div className="employee-card-header">
        <h2>{employee.name}</h2>
        <p>Age: {employee.age}</p>
      </div>
      <div className="employee-card-body">
        <h3>Address:</h3>
        <p>{employee.address.line1}</p>
        <p>{employee.address.city}</p>
        <p>{employee.address.country}</p>
        <p>ZIP Code: {employee.address.zipCode}</p>

        <h3>Contact Information</h3>
        {employee.contactMethods.map((contact, index) => (
          <div key={index} className="contact-method">
            <p>
              {`${contact.contact_method} :     ${contact.value}`}
            </p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetEmployeeDetail;
