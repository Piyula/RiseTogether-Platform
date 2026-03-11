import "../RoleDashboard.css";

function AdminDashboard() {
  return (
    <div className="role-dashboard" data-role="admin">
      <div className="role-dashboard__inner">
        <section className="role-dashboard__header">
          <h1>Admin Dashboard</h1>
          <p>
            Monitor platform activity, approve partner requests, and keep service delivery
            on track across beneficiaries, schools, and sponsors.
          </p>
        </section>

        <section className="role-dashboard__grid">
          <article className="metric-card">
            <p className="metric-card__label">Total Registered Users</p>
            <p className="metric-card__value">2,436</p>
          </article>
          <article className="metric-card">
            <p className="metric-card__label">Pending Verifications</p>
            <p className="metric-card__value">38</p>
          </article>
          <article className="metric-card">
            <p className="metric-card__label">Open Support Tickets</p>
            <p className="metric-card__value">21</p>
          </article>
          <article className="metric-card">
            <p className="metric-card__label">Monthly Impact Reports</p>
            <p className="metric-card__value">14</p>
          </article>
        </section>

        <section className="role-dashboard__sections">
          <article className="dashboard-panel">
            <h2>Recent Administrative Actions</h2>
            <ul className="dashboard-list">
              <li>Validated 7 new school registrations.</li>
              <li>Approved 12 sponsorship disbursement requests.</li>
              <li>Resolved 5 account access escalations.</li>
              <li>Published weekly operations and outcomes summary.</li>
            </ul>
          </article>

          <article className="dashboard-panel">
            <h2>Quick Actions</h2>
            <div className="action-grid">
              <button className="action-button">Review Accounts</button>
              <button className="action-button">Generate Reports</button>
              <button className="action-button">Manage Roles</button>
              <button className="action-button">Audit Activity</button>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default AdminDashboard;