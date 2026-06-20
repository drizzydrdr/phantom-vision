import ActionCard from './ActionCard';

const SKEWS = ['-skew-y-1', 'skew-y-1', '-skew-x-2', 'skew-y-1'];
const TAPES = [null, 'tl', null, 'br', 'tr'];

export default function SlotSection({ slot, dayActions, onToggle, tagColor = 'bg-secondary-container' }) {
  return (
    <div className="mb-12 relative">
      <div
        className={`absolute -left-[42px] top-0 ${tagColor} text-background w-16 h-8 flex items-center justify-center -skew-x-6 border-2 border-background hard-shadow font-display`}
        style={{ fontSize: 12 }}
      >
        {slot.timeTag}
      </div>
      <h2 className="font-display uppercase tracking-tighter text-on-surface-variant mb-1 -skew-x-2" style={{ fontSize: 'clamp(32px, 9vw, 44px)' }}>
        {slot.label}
      </h2>
      <p className="font-mono text-xs text-secondary mb-6 uppercase tracking-wide">{slot.time} · {slot.note}</p>

      <div className="grid grid-cols-1 gap-6">
        {slot.actions.map((action, i) => (
          <ActionCard
            key={action.id}
            action={action}
            isDone={!!dayActions[action.id]}
            onToggle={() => onToggle(action.id)}
            skew={SKEWS[i % SKEWS.length]}
            tapeCorner={TAPES[i % TAPES.length]}
          />
        ))}
      </div>
    </div>
  );
}
