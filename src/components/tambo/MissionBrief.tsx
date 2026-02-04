import React from 'react';

export type MissionBriefProps = {
  title: string;
  location: string;
  hazard: string;
  population: string;
  riskLevel: 'Low' | 'Moderate' | 'High' | 'Critical';
  confidence: number;
  keyRisks: string[];
  objectives: string[];
  lead: string;
};

export function MissionBrief({
  title,
  location,
  hazard,
  population,
  riskLevel,
  confidence,
  keyRisks = [],
  objectives = [],
  lead
}: MissionBriefProps) {
  return (
    <section className="component-card">
      <h4>{title}</h4>
      <div className="signal">
        <span className="signal-dot" />
        <span>
          {riskLevel} risk · {confidence}% confidence
        </span>
      </div>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Hazard:</strong> {hazard}
      </p>
      <p>
        <strong>Affected Population:</strong> {population}
      </p>
      <p>
        <strong>Incident Lead:</strong> {lead}
      </p>
      <div>
        <strong>Top Risks</strong>
        <ul>
          {keyRisks.map((risk, index) => (
            <li key={`${risk}-${index}`}>{risk}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Primary Objectives</strong>
        <ul>
          {objectives.map((objective, index) => (
            <li key={`${objective}-${index}`}>{objective}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
