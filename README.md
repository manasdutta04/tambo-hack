# ReliefOps Mission Control

ReliefOps is a solo, hackathon-ready incident response assistant built on Tambo. It turns a plain-language scenario into adaptive UI: mission briefs, resource allocations, action timelines, budget splits, and interactive checklists.

## Why this can win
- **Impact**: a real-world coordination problem with clear stakeholders.
- **Creativity**: the UI morphs per scenario instead of a fixed dashboard.
- **Technical depth**: Tambo components + tools + stateful interactables.
- **UX**: fast-to-scan plan cards that are immediately actionable.

## Core Tambo Components
- Mission brief card with risks and objectives.
- Resource allocation table with owners and priority.
- Action timeline with timeboxed execution.
- Budget breakdown with visual bars.
- Interactive checklist for live ops.

## Tools
- `estimate_staffing`: suggests volunteer and shift coverage.
- `allocate_budget`: splits budget by priorities.

## Quick Start
1. Install dependencies.
2. Add your Tambo API key to `.env.local`.
3. Start the dev server.

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

If you want Tambo to guide setup, run:

```bash
npx tambo init
```

## Suggested Prompts
- "Flooding across two neighborhoods, 6,000 residents affected, shelters limited. Build a 72-hour plan with staffing, comms, and supply distribution."
- "Heatwave response for a city marathon. Prioritize medical, water, and transit coordination for 25,000 attendees."
- "Power outage at a hospital network. Create a recovery timeline, backup power allocations, and patient communication plan."

## Project Structure
- `src/app/page.tsx` – landing page + live mission console.
- `src/components/assistant/AssistantPane.tsx` – chat interface that renders Tambo components.
- `src/components/tambo/` – adaptive UI components.
- `src/lib/tambo.ts` – component and tool registration.
