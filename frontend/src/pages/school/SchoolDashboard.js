import "../RoleDashboard.css";

function SchoolDashboard() {
  return (
    <div className="role-dashboard" data-role="school">
      <div className="role-dashboard__inner">
        <section className="role-dashboard__header">
          <h1>School Dashboard</h1>
          <p>
            Coordinate student support, monitor attendance and performance updates, and
            collaborate with sponsors for timely educational assistance.
          </p>
        </section>

        <section className="role-dashboard__grid">
          <article className="metric-card">
            <p className="metric-card__label">Sponsored Students</p>
            <p className="metric-card__value">284</p>
          </article>
          <article className="metric-card">
            <p className="metric-card__label">Pending Fee Requests</p>
            <p className="metric-card__value">19</p>
          </article>
          <article className="metric-card">
            <p className="metric-card__label">Attendance Alerts</p>
            <p className="metric-card__value">7</p>
          </article>
          <article className="metric-card">
            <p className="metric-card__label">Reports Due This Week</p>
            <p className="metric-card__value">12</p>
          </article>
        </section>

        <section className="role-dashboard__sections">
          <article className="dashboard-panel">
            <h2>School Operations</h2>
            <ul className="dashboard-list">
              <li>Term progress reports completed for Grade 8 cohorts.</li>
              <li>Submitted scholarship recommendation list for review.</li>
              <li>Verified tuition invoices for 15 beneficiary students.</li>
              <li>Scheduled sponsor engagement meeting for Monday.</li>
            </ul>
          </article>

          <article className="dashboard-panel">
            <h2>Quick Actions</h2>
            <div className="action-grid">
              <button className="action-button">Add Student Record</button>
              <button className="action-button">Upload Results</button>
              <button className="action-button">Submit Fee Request</button>
              <button className="action-button">Notify Sponsors</button>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default SchoolDashboard;