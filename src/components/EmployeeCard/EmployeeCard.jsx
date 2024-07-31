import React from "react";
import "./EmployeeCard.css";

const EmployeeCard = ({name,id}) => {
  return (
    <div className="employee-card">
      <div className="employee-details">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Employee ID:</strong> {id}
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
