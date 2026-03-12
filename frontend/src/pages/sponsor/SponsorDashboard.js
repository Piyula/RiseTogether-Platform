import "../RoleDashboard.css";

function SponsorDashboard() {
  return (
    <div className="role-dashboard" data-role="sponsor">
      <div className="role-dashboard__inner">
        <section className="role-dashboard__header">
          <h1>Sponsor Dashboard</h1>
          <p>
            Follow sponsorship impact, review verified requests, and allocate support to
            students and families where assistance is needed most.
          </p>
        </section>

        <section className="role-dashboard__grid">
          <article className="metric-card">
            <p className="metric-card__label">Active Sponsorships</p>
            <p className="metric-card__value">67</p>
          </article>
          <article className="metric-card">
            <p className="metric-card__label">New Requests to Review</p>
            <p className="metric-card__value">11</p>
          </article>
          <article className="metric-card">
            <p className="metric-card__label">Disbursed This Month</p>
            <p className="metric-card__value">$24,300</p>
          </article>
          <article className="metric-card">
            <p className="metric-card__label">Impact Reports Received</p>
            <p className="metric-card__value">29</p>
          </article>
        </section>

        <section className="role-dashboard__sections">
          <article className="dashboard-panel">
            <h2>Sponsorship Updates</h2>
            <ul className="dashboard-list">
              <li>Approved school materials grant for 24 learners.</li>
              <li>Received progress milestone report from 3 partner schools.</li>
              <li>Flagged two urgent healthcare assistance requests.</li>
              <li>Scheduled impact review call with program coordinator.</li>
            </ul>
          </article>

          <article className="dashboard-panel">
            <h2>Quick Actions</h2>
            <div className="action-grid">
              <button className="action-button">Review Requests</button>
              <button className="action-button">Fund a Case</button>
              <button className="action-button">View Impact Logs</button>
              <button className="action-button">Download Summary</button>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default SponsorDashboard;