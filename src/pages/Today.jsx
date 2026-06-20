import { useEffect, useMemo, useState } from 'react';
import StatCard from '../components/StatCard';
import SlotSection from '../components/SlotSection';
import {
  loadState, saveState, todayKey, getDayActions, toggleAction, computeTotals,
} from '../utils/storage';
import { STATS, SLOTS } from '../data/config';

const TAG_COLORS = ['bg-secondary-container', 'bg-secondary-container', 'bg-surface-bright'];

export default function Today() {
  const [state, setState] = useState(() => loadState());
  const tKey = todayKey();

  useEffect(() => { saveState(state); }, [state]);

  const dayActions = getDayActions(state, tKey);
  const totals = useMemo(() => computeTotals(state), [state]);

  function handleToggle(actionId) {
    setState((prev) => toggleAction(prev, tKey, actionId));
  }

  return (
    <div>
      <h1 className="font-display mb-6 uppercase tracking-tight -skew-x-2 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" style={{ fontSize: 'clamp(34px, 9vw, 48px)' }}>
        Current Status
      </h1>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {STATS.map((s, i) => (
          <StatCard key={s.key} stat={s} total={totals[s.key]} skew={i % 2 === 0 ? '-skew-x-2' : 'skew-x-2'} />
        ))}
      </div>

      <div className="relative border-l-4 border-on-background ml-4 pl-8 py-4">
        {SLOTS.map((slot, i) => (
          <SlotSection
            key={slot.id}
            slot={slot}
            dayActions={dayActions}
            onToggle={handleToggle}
            tagColor={TAG_COLORS[i % TAG_COLORS.length]}
          />
        ))}
      </div>
    </div>
  );
}
