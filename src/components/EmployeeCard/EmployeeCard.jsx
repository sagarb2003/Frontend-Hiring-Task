import React from "react";
import "./EmployeeCard.css";
import { Link } from "react-router-dom";


const EmployeeCard = ({name,id,deleteHandler}) => {
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
        <Link to={`/${id}`} className="show-details-button">
          Show Details
        </Link>
        <button className="delete-button" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
