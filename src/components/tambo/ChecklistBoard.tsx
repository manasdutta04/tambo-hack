import React from 'react';
import { useTamboComponentState, withInteractable } from '@tambo-ai/react';

export type ChecklistItem = {
  id: string;
  text: string;
  owner: string;
  urgency: 'Now' | 'Soon' | 'Watch';
  checked?: boolean;
};

export type ChecklistBoardProps = {
  title: string;
  items: ChecklistItem[];
};

function ChecklistBoardBase({ title, items }: ChecklistBoardProps) {
  const [stateItems, setStateItems] = useTamboComponentState(items ?? []);

  const toggleItem = (id: string) => {
    setStateItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <section className="component-card">
      <h4>{title}</h4>
      <div className="checklist">
        {(stateItems ?? []).map(item => (
          <label key={item.id} className="checklist-item">
            <input
              type="checkbox"
              checked={Boolean(item.checked)}
              onChange={() => toggleItem(item.id)}
            />
            <div>
              <strong>{item.text}</strong>
              <div className="signal">
                Owner: {item.owner} · Urgency: {item.urgency}
              </div>
            </div>
          </label>
        ))}
      </div>
    </section>
  );
}

export const ChecklistBoard = withInteractable(ChecklistBoardBase, {
  componentName: 'ChecklistBoard'
});
