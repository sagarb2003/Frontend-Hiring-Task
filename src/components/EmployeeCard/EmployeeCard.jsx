import React from "react";
import "./EmployeeCard.css";

const EmployeeCard = () => {
  return (
    <div className="employee-card">
      <div className="employee-details">
        <p>
          <strong>Name:</strong> Sagar
        </p>
        <p>
          <strong>Employee ID:</strong> 12345
        </p>
      </div>
      <div className="button-group">
        <button className="show-details-button" >
          Show Details
        </button>
        <button className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
