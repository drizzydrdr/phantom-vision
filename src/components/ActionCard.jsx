import { STATS } from '../data/config';

function gainArrows(weight) {
  // weight 0.5 -> single arrow (partial), weight 1 -> single arrow, weight 1.5+ reserved for future heavier actions
  return weight >= 1.5 ? '↑↑' : '↑';
}

function statName(key) {
  return STATS.find((s) => s.key === key)?.name || key;
}

export default function ActionCard({ action, isDone, onToggle, skew, tapeCorner }) {
  return (
    <div
      className={`bg-[#1A1A1A] double-border p-6 relative transform hover:-translate-y-1 transition-transform ${skew || '-skew-y-1'}`}
    >
      {tapeCorner === 'tl' && (
        <div className="absolute -top-3 -left-3 w-12 h-4 bg-on-background -rotate-6" />
      )}
      {tapeCorner === 'tr' && (
        <div className="absolute -top-3 -right-3 w-12 h-4 bg-on-background rotate-6" />
      )}
      {tapeCorner === 'br' && (
        <div className="absolute -bottom-3 -right-3 w-12 h-4 bg-on-background rotate-12" />
      )}

      <h3 className="font-display uppercase mb-2" style={{ fontSize: 22 }}>
        {action.label}
      </h3>
      <p className="font-body text-secondary mb-4">
        {action.stats.map((s, i) => (
          <span key={s.key}>
            {i > 0 ? ' / ' : ''}+ {statName(s.key)} <span className="text-primary font-bold">{gainArrows(s.weight)}</span>
          </span>
        ))}
      </p>
      <button
        onClick={onToggle}
        className={
          'w-full font-mono italic uppercase py-3 border-2 border-background hard-shadow transition-all ' +
          'hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] ' +
          'active:translate-y-[4px] active:translate-x-[4px] active:shadow-none ' +
          (isDone
            ? 'bg-surface-container-high text-primary border-primary'
            : 'bg-primary-container text-on-primary-container')
        }
      >
        {isDone ? '✓ Logged' : 'Execute'}
      </button>
    </div>
  );
}
