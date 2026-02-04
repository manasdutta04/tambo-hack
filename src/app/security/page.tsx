export default function SecurityPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="badge-row">
          <span className="badge">Security</span>
          <span className="badge">Trust</span>
        </div>
        <h1>Security & Data Handling</h1>
        <p>
          ReliefOps is designed for high‑trust environments. We minimize data retention
          and focus on secure, auditable workflows.
        </p>
      </section>

      <section className="panel">
        <div className="panel-title">
          <h2>Principles</h2>
          <span>Core</span>
        </div>
        <ul className="doc-list">
          <li>Collect only what is needed to plan the response.</li>
          <li>Keep outputs transparent and easy to audit.</li>
          <li>Support internal policies and incident reporting standards.</li>
        </ul>
      </section>

      <section className="panel">
        <div className="panel-title">
          <h2>Roadmap</h2>
          <span>Coming</span>
        </div>
        <ul className="doc-list">
          <li>Workspace‑level access controls</li>
          <li>Audit trail export</li>
          <li>Self‑hosted deployment option</li>
        </ul>
      </section>
    </main>
  );
}
