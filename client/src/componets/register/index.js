import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Index = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://ed-tech-service-backend.onrender.com/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        jToken: localStorage.getItem("jToken"),
      },
      body: JSON.stringify({
        dob: dob,
        gender: gender,
        address1: address1,
        address2: address2,
        city: city,
        state: state,
        pin: pin,
        country: country,
        phone: phone,
      }),
    });
    const json = await response.json();
    if (json.success === true) {
      setTimeout(() => {
        toast.success(
          "User Created Successfully",
          {
            position: "top-center",
          }
        );
      }, 100);
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 2000);
    } else {
      toast.warn("Invalid Credentials", {
        position: "top-center",
      });
    }
  }

  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Phone Number"
            required
            maxLength="10"
            minLength="2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Date of Birth</label>
          <input
            type="date"
            className="form-control"
            placeholder="Enter DOB"
            required
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Gender</label>
          <select
            name="gender"
            id="gender"
            style={{
              width: "100%",
              height: "45px",
              border: "1px solid #d3d3d3",
            }}
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Select">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Address Line 1</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Address Line 1"
            required
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Address Line 2</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            required
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter City"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>State</label>
          <select
            id="country-state"
            name="country-state"
            style={{
              width: "100%",
              height: "45px",
              border: "1px solid #d3d3d3",
            }}
            required
            value={phone}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="Select">Select</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadra and Nagar Haveli">
              Dadra and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Pin Code</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Pin Code"
            required
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Country</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Country"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <ToastContainer />
      </form>
    </>
  );
}

export default Index





