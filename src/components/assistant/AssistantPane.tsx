'use client';

import React from 'react';
import { useTamboThread, useTamboThreadInput } from '@tambo-ai/react';

type MessageContent =
  | string
  | Array<{
      type: string;
      text?: string;
    }>;

function renderContent(content: MessageContent) {
  if (typeof content === 'string') {
    return <p>{content}</p>;
  }

  if (Array.isArray(content)) {
    return content.map((part, index) => {
      if (part.type === 'text' && part.text) {
        return <p key={index}>{part.text}</p>;
      }
      return null;
    });
  }

  return null;
}

type AssistantPaneProps = {
  presetPrompt?: string;
  submitSignal?: number;
  resetSignal?: number;
  onMetricsChange?: (metrics: {
    activeMissions: number;
    assistantChunks: number;
    renderedComponents: number;
  }) => void;
};

export default function AssistantPane({
  presetPrompt,
  submitSignal,
  resetSignal,
  onMetricsChange
}: AssistantPaneProps) {
  const hasInitialized = React.useRef(false);
  const submitLock = React.useRef(false);
  const bottomRef = React.useRef<HTMLDivElement | null>(null);
  const lastSubmitSignal = React.useRef<number | undefined>(undefined);
  const lastResetSignal = React.useRef<number | undefined>(undefined);

  React.useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;
    if (typeof window === 'undefined') return;
  }, []);
  const { thread } = useTamboThread();
  const { value, setValue, submit, isPending } = useTamboThreadInput();

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [thread?.messages?.length, isPending]);

  React.useEffect(() => {
    if (!onMetricsChange) return;
    const messages = thread?.messages ?? [];
    const assistantChunks = messages.filter(message => message.role === 'assistant').length;
    const renderedComponents = messages.filter(message => Boolean(message.renderedComponent)).length;
    const activeMissions = messages.length > 0 ? 1 : 0;
    onMetricsChange({ activeMissions, assistantChunks, renderedComponents });
  }, [onMetricsChange, thread?.messages]);

  React.useEffect(() => {
    if (presetPrompt && presetPrompt !== value) {
      setValue(presetPrompt);
    }
  }, [presetPrompt, setValue, value]);

  const turns = React.useMemo(() => {
    const messages = thread?.messages ?? [];
    const grouped: Array<{
      id: string;
      user?: (typeof messages)[number];
      assistant: Array<(typeof messages)[number]>;
    }> = [];

    let current: (typeof grouped)[number] | null = null;

    for (const message of messages) {
      if (message.role === 'user') {
        if (current) {
          grouped.push(current);
        }
        current = { id: message.id, user: message, assistant: [] };
        continue;
      }

      if (!current) {
        current = { id: message.id, assistant: [] };
      }

      current.assistant.push(message);
    }

    if (current) {
      grouped.push(current);
    }

    return grouped;
  }, [thread?.messages]);

  const runSubmit = async (nextValue?: string) => {
    const payload = (nextValue ?? value).trim();
    if (!payload || isPending || submitLock.current) {
      return;
    }
    if (nextValue && nextValue !== value) {
      setValue(nextValue);
    }
    submitLock.current = true;
    try {
      await submit();
    } finally {
      submitLock.current = false;
    }
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await runSubmit();
  };

  React.useEffect(() => {
    if (submitSignal === undefined || submitSignal === lastSubmitSignal.current) {
      return;
    }
    lastSubmitSignal.current = submitSignal;
    const promptToUse = (presetPrompt ?? value).trim();
    if (!promptToUse) return;
    setTimeout(() => {
      runSubmit(promptToUse);
    }, 0);
  }, [submitSignal, presetPrompt, value]);

  React.useEffect(() => {
    if (resetSignal === undefined || resetSignal === lastResetSignal.current) {
      return;
    }
    lastResetSignal.current = resetSignal;
    setValue('');
  }, [resetSignal, setValue]);

  return (
    <div className="assistant">
      <div className="messages">
        {turns.map(turn => (
          <div key={turn.id} className="turn">
            {turn.user ? (
              <div className="message user">
                <div className="message-meta">user</div>
                <div className="message-content">
                  {renderContent(turn.user.content as MessageContent)}
                </div>
              </div>
            ) : null}

            {turn.assistant.length > 0 ? (
              <div className="message assistant">
                <div className="message-meta">assistant</div>
                {turn.assistant.map(message => (
                  <div key={message.id} className="assistant-chunk">
                    <div className="message-content">
                      {renderContent(message.content as MessageContent)}
                    </div>
                    {message.renderedComponent}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form className="compose" onSubmit={onSubmit}>
        <textarea
          placeholder="Describe the scenario, constraints, and outcomes you need..."
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <button type="submit" disabled={isPending}>
          {isPending ? 'Coordinating...' : 'Generate Response Plan'}
        </button>
      </form>
    </div>
  );
}
