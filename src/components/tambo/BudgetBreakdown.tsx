import React from 'react';

export type Allocation = {
  category: string;
  amount: number;
  rationale: string;
};

export type BudgetBreakdownProps = {
  title: string;
  total: number;
  allocations: Allocation[];
};

export function BudgetBreakdown({ title, total, allocations }: BudgetBreakdownProps) {
  const safeTotal = total === 0 ? 1 : total;

  return (
    <section className="component-card">
      <h4>{title}</h4>
      <p>Total Budget: ${total.toLocaleString()}</p>
      <div className="bar-stack">
        {allocations.map((allocation, index) => {
          const percent = Math.min(100, Math.round((allocation.amount / safeTotal) * 100));
          return (
            <div key={`${allocation.category}-${index}`}>
              <div className="bar-label">
                <span>{allocation.category}</span>
                <span>
                  ${allocation.amount.toLocaleString()} · {percent}%
                </span>
              </div>
              <div className="bar">
                <span style={{ width: `${percent}%` }} />
              </div>
              <p>{allocation.rationale}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
