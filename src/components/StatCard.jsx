import { levelFromTotal, progressInLevel } from '../utils/storage';

export default function StatCard({ stat, total, skew = '-skew-x-2' }) {
  const level = levelFromTotal(total);
  const progress = progressInLevel(total);

  return (
    <div className={`bg-surface-container-high border-2 border-on-background p-4 ${skew} hard-shadow flex flex-col justify-between h-32`}>
      <div className="flex justify-between items-start">
        <span className="font-mono text-xs font-bold tracking-wider bg-on-background text-background px-2 py-1 inline-block uppercase">
          {stat.name}
        </span>
        <span className="font-display text-primary" style={{ fontSize: 26 }}>
          Lv. {level}
        </span>
      </div>
      <div className="w-full bg-surface-dim h-2 border border-on-background">
        <div
          className="bg-primary-container h-full bar-fill"
          style={{ width: `${progress}%`, borderRight: progress > 0 ? '2px solid #131313' : 'none' }}
        />
      </div>
    </div>
  );
}
