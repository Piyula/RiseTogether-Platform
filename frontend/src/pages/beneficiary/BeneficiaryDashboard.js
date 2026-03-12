import "../RoleDashboard.css";

function BeneficiaryDashboard() {
  return (
    <div className="role-dashboard" data-role="beneficiary">
      <div className="role-dashboard__inner">
        <section className="role-dashboard__header">
          <h1>Beneficiary Dashboard</h1>
          <p>
            Track support requests, document household updates, and stay connected with
            schools and sponsors supporting your progress.
          </p>
        </section>

        <section className="role-dashboard__grid">
          <article className="metric-card">
            <p className="metric-card__label">Active Support Cases</p>
            <p className="metric-card__value">3</p>
          </article>
          <article className="metric-card">
            <p className="metric-card__label">Documents Submitted</p>
            <p className="metric-card__value">16</p>
          </article>
          <article className="metric-card">
            <p className="metric-card__label">Upcoming Follow-Ups</p>
            <p className="metric-card__value">2</p>
          </article>
          <article className="metric-card">
            <p className="metric-card__label">Aid Received This Month</p>
            <p className="metric-card__value">$640</p>
          </article>
        </section>

        <section className="role-dashboard__sections">
          <article className="dashboard-panel">
            <h2>Support Timeline</h2>
            <ul className="dashboard-list">
              <li>Food assistance request under final review.</li>
              <li>Education support grant approved by partner school.</li>
              <li>Monthly check-in form submitted and verified.</li>
              <li>Next social worker meeting scheduled for Friday.</li>
            </ul>
          </article>

          <article className="dashboard-panel">
            <h2>Quick Actions</h2>
            <div className="action-grid">
              <button className="action-button">New Request</button>
              <button className="action-button">Upload Document</button>
              <button className="action-button">View Messages</button>
              <button className="action-button">Update Profile</button>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default BeneficiaryDashboard;