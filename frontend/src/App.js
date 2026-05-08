import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

import AdminDashboard from "./pages/admin/AdminDashboard";
import BeneficiaryDashboard from "./pages/beneficiary/BeneficiaryDashboard";
import SchoolDashboard from "./pages/school/SchoolDashboard";
import SponsorDashboard from "./pages/sponsor/SponsorDashboard";

function App(){

return(

<BrowserRouter>

<Navbar />

<Routes>

<Route path="/" element={<HomePage/>}/>

<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>

<Route path="/admin/dashboard" element={<AdminDashboard/>}/>
<Route path="/beneficiary/dashboard" element={<BeneficiaryDashboard/>}/>
<Route path="/school/dashboard" element={<SchoolDashboard/>}/>
<Route path="/sponsor/dashboard" element={<SponsorDashboard/>}/>

</Routes>

</BrowserRouter>

);
}

export default App;