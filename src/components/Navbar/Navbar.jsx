import React from "react";
import "./Navbar.css"; 
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-heading" to="/">Employee Dashboard</Link>
      <Link to="/create" className="add-employee-link">
        Add Employee
      </Link>
    </nav>
  );
};

export default Navbar;
