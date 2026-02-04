export default function PricingPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="badge-row">
          <span className="badge">Pricing</span>
          <span className="badge">Hackathon Access</span>
        </div>
        <h1>Free During Beta</h1>
        <p>
          ReliefOps is currently in active development for the Tambo Hackathon.
          Teams can use the platform free while we iterate on the core response workflow.
        </p>
      </section>

      <section className="panel pricing-panel">
        <div>
          <h2>Beta Access</h2>
          <p>Unlimited scenarios, adaptive UI, and full component rendering.</p>
          <ul className="doc-list">
            <li>Mission briefs and timelines</li>
            <li>Resource allocation tables</li>
            <li>Interactive checklists</li>
            <li>AI tools enabled</li>
          </ul>
        </div>
        <div className="pricing-card">
          <div className="pricing-price">$0</div>
          <div className="pricing-period">Per team, during beta</div>
          <a href="/console" className="primary-button">Launch Console</a>
        </div>
      </section>
    </main>
  );
}
