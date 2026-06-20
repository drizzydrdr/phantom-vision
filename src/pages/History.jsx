import { useMemo, useState } from 'react';
import RadarChart from '../components/RadarChart';
import BarChart from '../components/BarChart';
import HeatmapMatrix from '../components/HeatmapMatrix';
import { loadState, getRecentDays, computeTotals } from '../utils/storage';
import { STATS } from '../data/config';

export default function History() {
  const [state] = useState(() => loadState());
  const days30 = useMemo(() => getRecentDays(state, 30), [state]);
  const days7 = useMemo(() => getRecentDays(state, 7), [state]);
  const totals = useMemo(() => computeTotals(state), [state]);

  const maxScale = Math.max(10, ...STATS.map((s) => totals[s.key])) * 1.15;

  return (
    <div>
      <span className="font-mono text-xs bg-on-background text-background px-2 py-1 inline-block uppercase mb-3">
        Your Record
      </span>
      <h1
        className="font-display uppercase tracking-tighter -skew-x-2 mb-6 glitch-text"
        data-text="DATA TERMINAL"
        style={{ fontSize: 'clamp(40px, 11vw, 54px)', lineHeight: 0.9 }}
      >
        DATA TERMINAL
      </h1>
      <div className="border-2 border-on-background p-4 font-mono text-secondary mb-8 normal-case" style={{ fontSize: 11, lineHeight: 1.6 }}>
        Every action you take leaves a mark. This is the record of who you're becoming.
      </div>

      <div className="bg-surface-container border-2 border-on-background p-5 mb-6 hard-shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-display italic uppercase" style={{ fontSize: 24 }}>Total Stats</h2>
          <span className="text-primary" style={{ fontSize: 18 }}>◎</span>
        </div>
        <div className="flex justify-center">
          <RadarChart totals={totals} maxScale={maxScale} />
        </div>
        <div className="grid grid-cols-2 gap-2 mt-3 font-mono text-secondary normal-case" style={{ fontSize: 11 }}>
          {STATS.map((s) => (
            <span key={s.key}>
              {s.name.toUpperCase()}: <b className="text-on-background">{totals[s.key]}</b>
            </span>
          ))}
        </div>
      </div>

      <div className="bg-surface-container border-2 border-on-background p-5 mb-6 hard-shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-display italic uppercase" style={{ fontSize: 24 }}>Weekly Yield</h2>
          <span className="font-mono bg-primary-container text-on-primary-container px-2 py-1 uppercase" style={{ fontSize: 10 }}>
            Live Data
          </span>
        </div>
        <BarChart days={days7} />
      </div>

      <div className="bg-surface-container border-2 border-on-background p-5 mb-6 hard-shadow">
        <h2 className="font-display italic uppercase mb-1" style={{ fontSize: 24 }}>Monthly Momentum</h2>
        <p className="font-mono text-secondary normal-case mb-4" style={{ fontSize: 10 }}>
          Intensity distribution, last 20 days
        </p>
        <HeatmapMatrix days={days30} />
      </div>
    </div>
  );
}
