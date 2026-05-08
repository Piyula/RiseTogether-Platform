import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>🌟 RiseTogether Platform</h1>
        <p>Empowering families, schools, sponsors, and communities</p>
      </header>

      {/* Roles Section */}
      <section className="roles-section">
        <h2>🧩 Roles</h2>
        <div className="cards">
          <div className="card company-admin">
            <h3>🔵 Company Admin</h3>
            <ul>
              <li>Approvals & verifications</li>
              <li>Manage families & schools</li>
              <li>Distribute monthly support</li>
              <li>Generate reports & track impact</li>
            </ul>
          </div>
          <div className="card beneficiary">
            <h3>🟢 Beneficiary Family</h3>
            <ul>
              <li>Register on platform</li>
              <li>Upload family documents</li>
              <li>Request monthly help, jobs, school support</li>
            </ul>
          </div>
          <div className="card school">
            <h3>🟡 School</h3>
            <ul>
              <li>Verify student eligibility</li>
              <li>Update attendance & progress</li>
              <li>Send monthly reports to company</li>
            </ul>
          </div>
          <div className="card sponsor">
            <h3>🔴 Sponsor</h3>
            <ul>
              <li>Provide funding</li>
              <li>Track allocation & impact</li>
              <li>Safe & transparent contributions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="workflow-section">
        <h2>🔥 Workflow</h2>
        <div className="workflow-steps">
          <div className="step">
            <h4>STEP 1 — Family Registration</h4>
            <p>Family registers → Company verifies → School verifies if needed</p>
          </div>
          <div className="step">
            <h4>STEP 2 — Sponsor Donations</h4>
            <p>Sponsors contribute → Company allocates to families</p>
          </div>
          <div className="step">
            <h4>STEP 3 — Job Opportunities</h4>
            <p>Families apply → Company assigns jobs → Track progress</p>
          </div>
          <div className="step">
            <h4>STEP 4 — School Admission Support</h4>
            <p>Company reviews → Partner school confirms → Monthly updates</p>
          </div>
          <div className="step">
            <h4>STEP 5 — Monthly Family Support</h4>
            <p>Company identifies needy families → Distribute monthly aid → Sponsors see impact</p>
          </div>
          <div className="step">
            <h4>STEP 6 — Reports & Transparency</h4>
            <p>Company generates reports → Sponsors track contributions → Full transparency</p>
          </div>
        </div>
      </section>

     
    </div>
  );
}

export default HomePage;