import React from 'react';

export type ResourceItem = {
  resource: string;
  quantity: string;
  owner: string;
  priority: 'Immediate' | 'High' | 'Medium' | 'Low';
  notes?: string;
};

export type ResourceTableProps = {
  title: string;
  resources: ResourceItem[];
};

export function ResourceTable({ title, resources = [] }: ResourceTableProps) {
  return (
    <section className="component-card">
      <h4>{title}</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Resource</th>
            <th>Qty</th>
            <th>Owner</th>
            <th>Priority</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((item, index) => (
            <tr key={`${item.resource}-${index}`}>
              <td>{item.resource}</td>
              <td>{item.quantity}</td>
              <td>{item.owner}</td>
              <td>{item.priority}</td>
              <td>{item.notes ?? '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
