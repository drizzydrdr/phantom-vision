import { STATS } from '../data/config';

// totals: object of stat key -> value. maxScale: value that maps to the outer ring.
export default function RadarChart({ totals, maxScale = 30 }) {
  const cx = 110, cy = 100, r = 78;
  const n = STATS.length; // 4 stats -> diamond layout
  const angleStep = (Math.PI * 2) / n;
  const startAngle = -Math.PI / 2;

  function pointFor(value, index) {
    const angle = startAngle + angleStep * index;
    const scale = Math.min(1, value / maxScale);
    const dist = r * scale;
    return [cx + Math.cos(angle) * dist, cy + Math.sin(angle) * dist];
  }

  function ringPoints(scale) {
    return STATS.map((_, i) => {
      const angle = startAngle + angleStep * i;
      return `${cx + Math.cos(angle) * r * scale},${cy + Math.sin(angle) * r * scale}`;
    }).join(' ');
  }

  const dataPoints = STATS.map((s, i) => pointFor(totals[s.key] || 0, i));
  const dataPolygon = dataPoints.map((p) => p.join(',')).join(' ');

  const labelPositions = STATS.map((s, i) => {
    const angle = startAngle + angleStep * i;
    const dist = r + 22;
    return { stat: s, x: cx + Math.cos(angle) * dist, y: cy + Math.sin(angle) * dist };
  });

  return (
    <svg width="220" height="200" viewBox="0 0 220 200">
      <polygon points={ringPoints(1)} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <polygon points={ringPoints(0.66)} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <polygon points={ringPoints(0.33)} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      {STATS.map((_, i) => {
        const angle = startAngle + angleStep * i;
        return (
          <line
            key={i}
            x1={cx} y1={cy}
            x2={cx + Math.cos(angle) * r} y2={cy + Math.sin(angle) * r}
            stroke="rgba(255,255,255,0.08)"
          />
        );
      })}
      <polygon
        className="radar-draw"
        points={dataPolygon}
        fill="rgba(216,0,0,0.35)"
        stroke="#ffb4a8"
        strokeWidth="2"
      />
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="4" fill="#fff" />
      ))}
      {labelPositions.map(({ stat, x, y }) => (
        <text
          key={stat.key}
          x={x} y={y}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="9"
          fontFamily="'Space Mono', monospace"
          fill="#c6c6c7"
        >
          {stat.tag}
        </text>
      ))}
    </svg>
  );
}
