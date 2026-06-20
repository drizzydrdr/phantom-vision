// A small set of Greek-inspired decorative marks: a laurel wreath (classical
// symbol of achievement/victory) and a meander/key pattern border, styled to
// match the app's red/black/cream palette. Used to visually anchor the
// Stoic content without looking like a literal ancient-ruins clipart.

export function LaurelDivider({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 60"
      width="100%"
      height="60"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* left laurel branch */}
      <g stroke="#ffb4a8" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M110 30 C 90 30, 70 24, 54 14" />
        <path d="M100 26 C 96 20, 92 16, 86 12" />
        <path d="M92 31 C 88 26, 84 22, 78 19" />
        <path d="M84 35 C 80 31, 76 28, 70 26" />
        <path d="M76 38 C 72 35, 68 33, 62 32" />
        <path d="M68 40 C 64 38, 60 37, 55 37" />
      </g>
      {/* right laurel branch, mirrored */}
      <g stroke="#ffb4a8" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M130 30 C 150 30, 170 24, 186 14" />
        <path d="M140 26 C 144 20, 148 16, 154 12" />
        <path d="M148 31 C 152 26, 156 22, 162 19" />
        <path d="M156 35 C 160 31, 164 28, 170 26" />
        <path d="M164 38 C 168 35, 172 33, 178 32" />
        <path d="M172 40 C 176 38, 180 37, 185 37" />
      </g>
      {/* center mark */}
      <circle cx="120" cy="30" r="3" fill="#d80000" />
      <line x1="120" y1="30" x2="120" y2="10" stroke="#e5e2e1" strokeWidth="1.2" opacity="0.4" />
    </svg>
  );
}

// Repeating Greek key / meander pattern, used as a thin border accent.
export function MeanderBorder({ className = '' }) {
  const unit = 20;
  const repeats = 11;
  const w = unit * repeats;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${w} 20`}
      width="100%"
      height="20"
      preserveAspectRatio="none"
    >
      {Array.from({ length: repeats }).map((_, i) => {
        const x = i * unit;
        return (
          <path
            key={i}
            d={`M${x} 18 H${x + 8} V${4} H${x + 14} V12 H${x + 20} V18`}
            fill="none"
            stroke="#ffb4a8"
            strokeWidth="2"
            opacity="0.55"
          />
        );
      })}
    </svg>
  );
}
