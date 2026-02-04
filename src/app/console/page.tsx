'use client';

import React from 'react';
import AssistantPane from '../../components/assistant/AssistantPane';

export default function ConsolePage() {
  const [presetPrompt, setPresetPrompt] = React.useState<string | undefined>(undefined);
  const [submitSignal, setSubmitSignal] = React.useState(0);
  const [resetSignal, setResetSignal] = React.useState(0);

  const scenarioPool = [
    'Hospital network power outage across three sites. Stabilize critical care, allocate backup power, and coordinate patient communications for 72 hours.',
    'Citywide heatwave response. Prioritize hydration, medical coverage, and transport for 25,000 marathon attendees.',
    'Flooding across two neighborhoods, 6,000 residents affected. Build a 72-hour plan with staffing, comms, and supply distribution.'
  ];

  const handleNewMission = () => {
    setPresetPrompt(undefined);
    setResetSignal(prev => prev + 1);
  };

  const handleLoadScenario = () => {
    const pick = scenarioPool[Math.floor(Math.random() * scenarioPool.length)];
    setPresetPrompt(pick);
    setSubmitSignal(prev => prev + 1);
  };

  return (
    <main>
      <section className="console-hero">
        <div>
          <div className="badge-row">
            <span className="badge">ReliefOps Console</span>
            <span className="badge">Live Response</span>
          </div>
          <h1>Live Mission Console</h1>
          <p>
            Generate operational briefs, timelines, and checklists from a single prompt.
            This is the working surface for responders.
          </p>
          <div className="console-meta">
            <div className="console-pill">Region: Global</div>
            <div className="console-pill">Priority: Adaptive</div>
            <div className="console-pill">Latency: Real‑time</div>
          </div>
          <div className="console-actions">
            <button type="button" className="primary-button" onClick={handleNewMission}>
              Start New Mission
            </button>
            <button type="button" className="ghost-button" onClick={handleLoadScenario}>
              Load Scenario
            </button>
          </div>
        </div>
        <div className="console-status">
          <div className="signal">
            <span className="signal-dot" />
            <span>System Ready · Awaiting scenario</span>
          </div>
          <div className="console-stats">
            <div>
              <strong>0</strong>
              <span>Active missions</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Recommended components</span>
            </div>
            <div>
              <strong>12m</strong>
              <span>Avg. response setup</span>
            </div>
          </div>
        </div>
      </section>

      <div className="console-grid">
        <section className="panel console-panel">
          <div className="panel-title">
            <h2>Mission Workspace</h2>
            <span>Tambo Powered</span>
          </div>
          <div className="console-toolbar">
            <div className="console-toolbar-title">Conversation</div>
            <div className="console-chiplist">
              <span className="console-chip">Auto‑briefing</span>
              <span className="console-chip">Interactive UI</span>
              <span className="console-chip">Tools enabled</span>
            </div>
          </div>
          <AssistantPane
            presetPrompt={presetPrompt}
            submitSignal={submitSignal}
            resetSignal={resetSignal}
          />
        </section>

        <aside className="panel console-side">
          <div className="panel-title">
            <h2>Ops Signals</h2>
            <span>Live</span>
          </div>
          <div className="console-signal-stack">
            <div className="console-chip">
              <span>Response Mode</span>
              <strong>Standby</strong>
            </div>
            <div className="console-chip">
              <span>Coverage Window</span>
              <strong>72 Hours</strong>
            </div>
            <div className="console-chip">
              <span>Priority Feed</span>
              <strong>Awaiting inputs</strong>
            </div>
          </div>
          <div className="console-divider" />
          <div className="panel-title">
            <h2>Recommended Output</h2>
            <span>AI</span>
          </div>
          <ul className="console-list">
            <li>Mission Brief with risk score</li>
            <li>Action Timeline for first 24 hours</li>
            <li>Resource Allocation table</li>
            <li>Interactive Checklist</li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
