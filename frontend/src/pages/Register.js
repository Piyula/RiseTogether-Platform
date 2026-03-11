import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
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
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
        <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
        <input placeholder="Password" type="password" onChange={e=>setForm({...form,password:e.target.value})}/>
        <select value={form.role} onChange={e=>setForm({...form,role:e.target.value})}>
          <option value="beneficiary">Beneficiary</option>
          <option value="school">School</option>
          <option value="sponsor">Sponsor</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;