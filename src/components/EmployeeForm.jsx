import React, { useState } from "react";
import "./EmployeeForm.css";
import axios from "axios";

const EmployeeForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [line1, setLine1] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [value, setValue] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      age,
      address: {
        line1,
        city,
        country,
        zipCode,
      },
      contactMethods: [
        {
          contact_method:contactMethod,
          value,
        },
      ],
    };
    // console.log(formData);
    try {
        const response = await axios.post(
          "https://free-ap-south-1.cosmocloud.io/development/api/employee",
          formData,
          {
            headers: {
              projectId: "66a9e7cf39e2fdc09bbb9f5d",
              environmentId: "66a9e7cf39e2fdc09bbb9f5e",
            },
          }
        );
        console.log("Employee Created SuccessFully",response);
    } catch (error) {
        console.log("Error Occurred",error)
    }
  };

  return (
    <form className="employee-form" onSubmit={submitHandler}>
      <h2>Create Employee</h2>

      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <h3>Address</h3>
      <div className="form-group">
        <label htmlFor="line1">Address Line 1:</label>
        <input
          type="text"
          name="line1"
          required
          value={line1}
          onChange={(e) => setLine1(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="city"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          name="country"
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="zipCode">Zip Code:</label>
        <input
          type="text"
          name="zipCode"
          required
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </div>

      <h3>Contact Details</h3>
      <div className="form-group">
        <label htmlFor="contact_method">Contact Method:</label>
        <select
          name="contact_method"
          value={contactMethod}
          onChange={(e) => {
            setContactMethod(e.target.value);
            setValue("");
          }}
        >
          <option value="">Select a method</option>
          <option value="E-Mail">E-Mail</option>
          <option value="Phone Number">Phone Number</option>
        </select>
      </div>

      <div className="form-group">
        <input
          type="text"
          name="contact_value"
          placeholder={
            contactMethod === "E-Mail"
              ? "Enter E-mail"
              : contactMethod === "Phone Number"
              ? "Enter Phone Number"
              : ""
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!contactMethod}
          required={contactMethod}
        />
      </div>

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default EmployeeForm;
