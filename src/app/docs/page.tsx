export default function DocsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="badge-row">
          <span className="badge">Docs</span>
          <span className="badge">How It Works</span>
        </div>
        <h1>How ReliefOps Works</h1>
        <p>
          ReliefOps turns a plain‑language incident description into operationally useful UI.
          Tambo analyzes the scenario and produces structured components that responders can act on.
        </p>
      </section>

      <section className="panel">
        <div className="panel-title">
          <h2>Workflow</h2>
          <span>Flow</span>
        </div>
        <ol className="doc-steps">
          <li>
            <strong>Signal Intake</strong>
            <p>Provide location, scope, constraints, and desired outcomes.</p>
          </li>
          <li>
            <strong>Brief Assembly</strong>
            <p>Tambo generates mission briefs, risks, objectives, and owners.</p>
          </li>
          <li>
            <strong>Execution Layer</strong>
            <p>Interactive timelines, checklists, and allocation tables appear in the console.</p>
          </li>
          <li>
            <strong>Ops Iteration</strong>
            <p>Refine, expand, or request deeper plans without losing state.</p>
          </li>
        </ol>
      </section>

      <section className="panel">
        <div className="panel-title">
          <h2>Core Components</h2>
          <span>UI</span>
        </div>
        <ul className="doc-list">
          <li>Mission Brief card with risk rating and objectives.</li>
          <li>Action Timeline for phase‑based response planning.</li>
          <li>Resource Allocation table with ownership and priority.</li>
          <li>Budget Breakdown for rapid funding decisions.</li>
          <li>Interactive Checklist for execution tracking.</li>
        </ul>
      </section>

      <section className="panel">
        <div className="panel-title">
          <h2>Example Prompt</h2>
          <span>Try This</span>
        </div>
        <div className="doc-callout">
          “Hospital network power outage across three sites. Stabilize critical care, allocate
          backup power, and coordinate patient communications for 72 hours.”
        </div>
      </section>
    </main>
  );
}
