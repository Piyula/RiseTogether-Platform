import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import AdminDashboard from "./pages/admin/AdminDashboard";
import BeneficiaryDashboard from "./pages/beneficiary/BeneficiaryDashboard";
import SchoolDashboard from "./pages/school/SchoolDashboard";
import SponsorDashboard from "./pages/sponsor/SponsorDashboard";

function App(){

return(

<BrowserRouter>

<Routes>

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