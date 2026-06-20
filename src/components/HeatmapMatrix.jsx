// days: array of { key, totals, date }, most recent last. Groups into weeks of 5 for the matrix display (Mon-Fri style compact view, matching the W1-W4 reference layout)
export default function HeatmapMatrix({ days }) {
  function intensityClass(totalsObj) {
    const sum = Object.values(totalsObj).reduce((a, b) => a + b, 0);
    if (sum === 0) return 'bg-white/5';
    if (sum <= 1.5) return 'bg-primary-container/40';
    if (sum <= 3) return 'bg-primary-container/70';
    return 'bg-primary';
  }

  // chunk the last 20 days into 4 rows of 5
  const last20 = days.slice(-20);
  const weeks = [];
  for (let i = 0; i < last20.length; i += 5) {
    weeks.push(last20.slice(i, i + 5));
  }

  return (
    <div>
      <div className="flex flex-col gap-1.5">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex items-center gap-2">
            <span className="font-mono text-xs text-secondary w-6">W{wi + 1}</span>
            <div className="flex gap-1.5 flex-1">
              {week.map((d) => (
                <div
                  key={d.key}
                  className={`aspect-square flex-1 border border-white/10 ${intensityClass(d.totals)}`}
                  title={d.date.toDateString()}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 mt-4 font-mono text-secondary normal-case" style={{ fontSize: 9.5 }}>
        LESS
        <div className="w-3 h-3 bg-white/5 border border-white/10" />
        <div className="w-3 h-3 bg-primary-container/40 border border-white/10" />
        <div className="w-3 h-3 bg-primary-container/70 border border-white/10" />
        <div className="w-3 h-3 bg-primary border border-white/10" />
        MORE
      </div>
    </div>
  );
}
