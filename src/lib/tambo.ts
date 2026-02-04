import { z } from 'zod';
import { defineTool } from '@tambo-ai/react';
import { MissionBrief } from '../components/tambo/MissionBrief';
import { ResourceTable } from '../components/tambo/ResourceTable';
import { ActionTimeline } from '../components/tambo/ActionTimeline';
import { BudgetBreakdown } from '../components/tambo/BudgetBreakdown';
import { ChecklistBoard } from '../components/tambo/ChecklistBoard';

const missionBriefSchema = z.object({
  title: z.string(),
  location: z.string(),
  hazard: z.string(),
  population: z.string(),
  riskLevel: z.enum(['Low', 'Moderate', 'High', 'Critical']),
  confidence: z.number().min(0).max(100),
  keyRisks: z.array(z.string()).min(1),
  objectives: z.array(z.string()).min(1),
  lead: z.string()
});

const resourceTableSchema = z.object({
  title: z.string(),
  resources: z.array(
    z.object({
      resource: z.string(),
      quantity: z.string(),
      owner: z.string(),
      priority: z.enum(['Immediate', 'High', 'Medium', 'Low']),
      notes: z.string().optional()
    })
  )
});

const actionTimelineSchema = z.object({
  title: z.string(),
  phases: z.array(
    z.object({
      time: z.string(),
      title: z.string(),
      owner: z.string(),
      details: z.string()
    })
  )
});

const budgetBreakdownSchema = z.object({
  title: z.string(),
  total: z.number().min(0),
  allocations: z.array(
    z.object({
      category: z.string(),
      amount: z.number().min(0),
      rationale: z.string()
    })
  )
});

const checklistBoardSchema = z.object({
  title: z.string(),
  items: z.array(
    z.object({
      id: z.string(),
      text: z.string(),
      owner: z.string(),
      urgency: z.enum(['Now', 'Soon', 'Watch']),
      checked: z.boolean().optional()
    })
  )
});

export const tamboComponents = [
  {
    name: 'MissionBrief',
    description:
      'Summarize the situation, risk, and objectives in a crisp incident brief card.',
    component: MissionBrief,
    propsSchema: missionBriefSchema
  },
  {
    name: 'ResourceTable',
    description:
      'Allocate people, gear, and facilities with owners and priority level.',
    component: ResourceTable,
    propsSchema: resourceTableSchema
  },
  {
    name: 'ActionTimeline',
    description:
      'Lay out a time-based response plan with owners and key deliverables.',
    component: ActionTimeline,
    propsSchema: actionTimelineSchema
  },
  {
    name: 'BudgetBreakdown',
    description:
      'Show a budget split with rationale and percent-based bars.',
    component: BudgetBreakdown,
    propsSchema: budgetBreakdownSchema
  },
  {
    name: 'ChecklistBoard',
    description:
      'Interactive checklist that can be ticked off during execution.',
    component: ChecklistBoard,
    propsSchema: checklistBoardSchema
  }
];

export const tamboTools = [
  defineTool({
    name: 'estimate_staffing',
    description: 'Estimate volunteer staffing and shifts for an incident.',
    inputSchema: z.object({
      population: z.number().min(1),
      complexity: z.number().min(1).max(5),
      hoursPerShift: z.number().min(2).max(12)
    }),
    outputSchema: z.object({
      volunteers: z.number(),
      shifts: z.number(),
      note: z.string()
    }),
    tool: async ({ population, complexity, hoursPerShift }) => {
      const base = Math.ceil(population / 120);
      const multiplier = 0.8 + complexity * 0.2;
      const volunteers = Math.ceil(base * multiplier);
      const shifts = Math.max(1, Math.round(24 / hoursPerShift));
      return {
        volunteers,
        shifts,
        note: `Recommend ${volunteers} volunteers across ${shifts} shifts.`
      };
    }
  }),
  defineTool({
    name: 'allocate_budget',
    description: 'Split a response budget across priority categories.',
    inputSchema: z.object({
      total: z.number().min(0),
      priorities: z.array(z.string()).min(1)
    }),
    outputSchema: z.object({
      allocations: z.array(
        z.object({
          category: z.string(),
          amount: z.number(),
          percent: z.number()
        })
      )
    }),
    tool: async ({ total, priorities }) => {
      const allocations = priorities.map((priority, index) => ({
        category: priority,
        amount: Math.round((total / priorities.length) * (1 - index * 0.05))
      }));
      const normalizedTotal = allocations.reduce((sum, item) => sum + item.amount, 0) || 1;
      return {
        allocations: allocations.map(item => ({
          ...item,
          percent: Math.round((item.amount / normalizedTotal) * 100)
        }))
      };
    }
  })
];
