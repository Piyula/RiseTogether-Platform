import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "beneficiary"
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5001/api/auth/register", form);
    alert("Registered successfully. Please login.");
    navigate("/login");
  };

  return (
    <div className="form-container">
      <div className="top">
        <img src="/logo2.png" alt="Logo" className="img" />
        <h1>Join the Movement</h1>
        <p>Empower yourself and your community</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form1 two-column-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">First Name</label>
              <input id="name" placeholder="First Name" onChange={e=>setForm({...form,name:e.target.value})}/>
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" placeholder="Last Name" onChange={e=>setForm({...form,lastName:e.target.value})}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input id="phone" placeholder="Phone number" onChange={e=>setForm({...form,phone:e.target.value})}/>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input id="address" placeholder="Address" onChange={e=>setForm({...form,address:e.target.value})}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select id="role" value={form.role} onChange={e=>setForm({...form,role:e.target.value})}>
                <option value="beneficiary">Beneficiary</option>
                <option value="school">School</option>
                <option value="sponsor">Sponsor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input id="password" placeholder="Password" type="password" onChange={e=>setForm({...form,password:e.target.value})}/>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input id="confirmPassword" placeholder="Confirm Password" type="password" onChange={e=>setForm({...form,confirmPassword:e.target.value})}/>
            </div>
          </div>
          <button type="submit">Register</button>
        </div>
      </form>

      <div className="social-signup-card">
        <span className="social-title">OR SIGN UP WITH</span>
        <div className="social-btn-row">
          <button type="buttonsss" className="social-btn google-btn">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="social-icon" />
            Google
          </button>
          <button type="buttonsss" className="social-btn facebook-btn">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" className="social-icon" />
            Facebook
          </button>
        </div>
        <div className="login-link">
          Already have an account? <a href="/login">Sign in</a>
        </div>
      </div>

    </div>

    
      
  );
}

export default Register;