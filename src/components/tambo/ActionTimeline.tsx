import React from 'react';

export type TimelinePhase = {
  time: string;
  title: string;
  owner: string;
  details: string;
};

export type ActionTimelineProps = {
  title: string;
  phases: TimelinePhase[];
};

export function ActionTimeline({ title, phases }: ActionTimelineProps) {
  const safePhases = phases ?? [];

  return (
    <section className="component-card">
      <h4>{title}</h4>
      <div className="timeline">
        {safePhases.map((phase, index) => (
          <div className="timeline-item" key={`${phase.title}-${index}`}>
            <strong>{phase.time} · {phase.title}</strong>
            <div>{phase.details}</div>
            <div className="signal">Lead: {phase.owner}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
