import React, { Component } from "react";


export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      dob:"",
      gender:"",
      address1:"",
      address2:"",
      city:"",
      state:"",
      pin:"",
      country:"",
      phone:"",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
handleSubmit(e) {    
    e.preventDefault();
    const {email, dob, gender, address1, address2, city, state, pin, country, phone } = this.state;
    console.log(email,dob, gender, address1, address2, city, state, pin, country, phone);
    fetch("http://localhost:5000/register", {
      method: "PUT",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        dob, 
        gender, 
        address1, 
        address2, 
        city, 
        state, 
        pin, 
        country, 
        phone,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
      
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        {/* <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            required
            onChange={(e) => this.setState({firstName: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(e) => this.setState({lastName: e.target.value })}
          />
        </div> */}

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
            pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        {/* <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div> */}
        <div className="mb-3">
          <label>Phone Number</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter Phone Number"
            required
            maxLength="10"
            minLength="10"
            onChange={(e) => this.setState({ phone: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Date of Birth</label>
          <input
            type="date"
            className="form-control"
            placeholder="Enter DOB"
            required
            onChange={(e) => this.setState({ dob: e.target.value })}
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
                    //marginBottom: "30px",
                    border: "1px solid #d3d3d3",
                  }}
                  required
                  onChange={(e) => this.setState({ gender: e.target.value })}
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
            onChange={(e) => this.setState({ address1: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Address Line 2</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            required
            onChange={(e) => this.setState({ address2: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter City"
            required
            onChange={(e) => this.setState({ city: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>State</label>
                <select id="country-state" name="country-state" 
				style={{
                    width: "100%",
                    height: "45px",
                    //marginBottom: "30px",
                    border: "1px solid #d3d3d3",
                  }}
                  required
                  onChange={(e) => this.setState({ state: e.target.value })}
                  >
				          <option value="Select">Select</option>
                  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
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
        {/* <div className="mb-3">
          <label>State</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter State"
            required
            onChange={(e) => this.setState({ state: e.target.value })}
          />
        </div> */}
        <div className="mb-3">
          <label>Pin Code</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Pin Code"
            required
            onChange={(e) => this.setState({ pin: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Country</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Country"
            required
            onChange={(e) => this.setState({ country: e.target.value })}
          />
        </div>
        

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" >
            Sign Up
          </button>
        </div>
        {/* <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p> */}
      </form>
    );
  }
}
