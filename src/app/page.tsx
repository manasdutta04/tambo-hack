export default function Home() {
  return (
    <main>
      <section className="hero">
        <div>
          <div className="badge-row">
            <span className="badge">Tambo Hackathon</span>
            <span className="badge">Adaptive Ops UI</span>
          </div>
          <h1>Run critical response like a premium command center.</h1>
          <p>
            A premium command experience for critical response teams. ReliefOps transforms
            incident signals into mission briefs, timelines, and checklists that feel
            operator‑ready from the first prompt.
          </p>
          <div className="hero-cta">
            <a href="/console" className="primary-button">Launch Console</a>
            <a href="#overview" className="ghost-button">See How It Works</a>
          </div>
        </div>
        <div className="hero-card">
          <h2>Mission Readiness</h2>
          <p>
            Clear signals, crisp priorities, and AI‑assembled action layers. Built to feel
            like a real operations console.
          </p>
          <div className="kpi-grid">
            <div className="kpi">
              <h3>02</h3>
              <p>Active response lanes</p>
            </div>
            <div className="kpi">
              <h3>06</h3>
              <p>Critical signals tracked</p>
            </div>
            <div className="kpi">
              <h3>14</h3>
              <p>Ops tasks auto-triaged</p>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="overview">
        <div>
          <section className="panel">
            <div className="panel-title">
              <h2>Mission Intel</h2>
              <span>Ops Flow</span>
            </div>
            <p>
              Describe the incident, objectives, and constraints. ReliefOps assembles a mission
              brief, allocates resources, crafts a timeline, and generates a live checklist for
              on-the-ground execution.
            </p>
            <div className="mission-grid">
              <div className="mission-step">
                <div className="step-pill">01</div>
                <div>
                  <strong>Signal Intake</strong>
                  <p>Capture location, scope, and constraints in one prompt.</p>
                </div>
              </div>
              <div className="mission-step">
                <div className="step-pill">02</div>
                <div>
                  <strong>Adaptive Briefing</strong>
                  <p>AI assembles mission cards with risk, objectives, and owners.</p>
                </div>
              </div>
              <div className="mission-step">
                <div className="step-pill">03</div>
                <div>
                  <strong>Execution Layer</strong>
                  <p>Teams track tasks via interactive checklists and timelines.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="panel">
          <div className="panel-title">
            <h2>Scenario Starters</h2>
            <span>Start Here</span>
          </div>
          <div className="prompt-list">
            <div className="prompt">
              "Flooding across two neighborhoods, 6,000 residents affected, shelters limited.
              Build a 72-hour plan with staffing, comms, and supply distribution."
            </div>
            <div className="prompt">
              "Heatwave response for a city marathon. Prioritize medical, water, and transit
              coordination for 25,000 attendees."
            </div>
            <div className="prompt">
              "Power outage at a hospital network. Create a recovery timeline, backup power
              allocations, and patient communication plan."
            </div>
          </div>
        </section>
      </section>

      <section id="capabilities" className="capabilities">
        <h2>Designed For High‑Trust Response</h2>
        <p>
          Every surface is intentional: fast scanning, minimal noise, and a clear path from
          AI guidance to operational action.
        </p>
        <div className="capability-grid">
          <div className="capability-card">
            <h3>Adaptive UI</h3>
            <p>Cards that reshape based on incident type and urgency.</p>
          </div>
          <div className="capability-card">
            <h3>Operator Workflow</h3>
            <p>Briefs, timelines, and checklists built for real-world execution.</p>
          </div>
          <div className="capability-card">
            <h3>Decision Support</h3>
            <p>Tools for staffing and budget splits with explainable output.</p>
          </div>
        </div>
      </section>

      <p className="footer-note">
        Ready to run a mission? Launch the console and ask for a "Mission Brief" or "Action Timeline"
        to see the adaptive UI render inline.
      </p>
    </main>
  );
}
