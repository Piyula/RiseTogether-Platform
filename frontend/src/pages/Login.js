import axios from "axios";
import { useState } from "react";

function Login() {
  const [form, setForm] = useState({ email:"", password:"" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/login", form);
    localStorage.setItem("token", res.data.token);
    alert("Logged in!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
      <input placeholder="Password" type="password" onChange={e=>setForm({...form,password:e.target.value})}/>
      <button>Login</button>
    </form>
  );
}

export default Login;