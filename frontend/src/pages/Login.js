import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Login() {

  const [form, setForm] = useState({ email:"", password:"" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
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

  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email"
        onChange={e=>setForm({...form,email:e.target.value})}/>

      <input placeholder="Password" type="password"
        onChange={e=>setForm({...form,password:e.target.value})}/>

      <button>Login</button>
    </form>
  );
}

export default Login;