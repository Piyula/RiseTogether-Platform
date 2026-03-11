import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./Form.css";

function Login() {

  const [form, setForm] = useState({ email:"", password:"" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      setError("");

      const res = await axios.post(
        "http://localhost:5001/api/auth/login",
        form
      );

      const token = res.data.token;

      localStorage.setItem("token", token);

      const decoded = jwtDecode(token);

      const role = decoded.role;

      if(role === "admin") navigate("/admin/dashboard");

      if(role === "beneficiary") navigate("/beneficiary/dashboard");

      if(role === "school") navigate("/school/dashboard");

      if(role === "sponsor") navigate("/sponsor/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }

  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email"
          onChange={e=>setForm({...form,email:e.target.value})}/>

        <input placeholder="Password" type="password"
          onChange={e=>setForm({...form,password:e.target.value})}/>

        {error && <p style={{ color: "#c62828", margin: "8px 0" }}>{error}</p>}

        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;