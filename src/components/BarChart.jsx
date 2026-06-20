const DAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

// days: array of { key, totals } length 7, chronological (oldest first)
export default function BarChart({ days }) {
  const sums = days.map((d) => Object.values(d.totals).reduce((a, b) => a + b, 0));
  const max = Math.max(1, ...sums);
  const maxIdx = sums.indexOf(Math.max(...sums));

  return (
    <div className="flex items-end justify-between gap-2" style={{ height: 120 }}>
      {days.map((d, i) => {
        const heightPct = Math.max(4, (sums[i] / max) * 100);
        const isMax = i === maxIdx && sums[i] > 0;
        return (
          <div key={d.key} className="flex-1 flex flex-col items-center justify-end h-full">
            <div
              className={`w-full bar-fill-v ${isMax ? 'bg-primary-container border-t-2 border-on-background' : 'bg-secondary'}`}
              style={{ height: `${heightPct}%`, animationDelay: `${i * 0.05}s` }}
            />
            <span className="font-mono text-xs text-secondary mt-2">
              {DAY_LABELS[new Date(d.date).getDay()]}
            </span>
          </div>
        );
      })}
    </div>
  );
}
