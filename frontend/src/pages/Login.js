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
      <div className="top">
          <img src="/logo2.png" alt="Logo" className="img" />
          <h1>Welcome Back</h1>
          <p>Login to continue our collective journey</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form1">
           <label name="email">Email Address</label>
           <input placeholder=" Name@gmail.com"
             onChange={e=>setForm({...form,email:e.target.value})}/>

           <label name="password">Password</label>
           <input placeholder="Password" type="password"
             onChange={e=>setForm({...form,password:e.target.value})}/>
             {error && <p className="login-error">{error}</p>}



          <div className="checkbox-container">
            <input type="checkbox" id="remember" className="checkbox" />
            <label htmlFor="remember" className="checkbox-label">Keep me logged in</label>
          </div>
          <p className="forgot-password"> Forgot Password? <a href="/forgot-password">Click here</a> </p>
          </div>

            <button className="buttonss">signin</button>
        
      </form>

      <p>Dont have an account? <a href="/register">Sign up</a></p>
    </div>
    
  );
}

export default Login;