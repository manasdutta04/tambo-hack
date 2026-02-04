export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="badge-row">
          <span className="badge">About</span>
          <span className="badge">Mission</span>
        </div>
        <h1>Built for Critical Moments</h1>
        <p>
          ReliefOps is a mission control interface that helps responders make decisions fast.
          It blends AI reasoning with operational UI so teams can move from signal to action
          in minutes.
        </p>
      </section>

      <section className="panel">
        <div className="panel-title">
          <h2>Why It Exists</h2>
          <span>Purpose</span>
        </div>
        <p>
          During incidents, teams lose time translating raw info into an actionable plan.
          ReliefOps compresses that gap with adaptive UI: a mission brief, clear owners,
          and an execution checklist that stays live throughout the response.
        </p>
      </section>

      <section className="panel">
        <div className="panel-title">
          <h2>Built For</h2>
          <span>Users</span>
        </div>
        <ul className="doc-list">
          <li>Emergency operations centers</li>
          <li>Hospital incident commanders</li>
          <li>Municipal response teams</li>
          <li>Non‑profit relief coordinators</li>
        </ul>
      </section>

      <section className="panel">
        <div className="panel-title">
          <h2>Contact</h2>
          <span>Reach Me</span>
        </div>
        <div className="contact-grid">
          <a className="contact-tile" href="https://linkedin.com/in/manasdutta04">
            <div className="contact-icon">in</div>
            <div>
              <div className="contact-title">LinkedIn</div>
              <div className="contact-sub">linkedin.com/in/manasdutta04</div>
            </div>
          </a>
          <a className="contact-tile" href="https://github.com/manasdutta04">
            <div className="contact-icon">GH</div>
            <div>
              <div className="contact-title">GitHub</div>
              <div className="contact-sub">github.com/manasdutta04</div>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
