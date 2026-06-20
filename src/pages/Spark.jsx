import { useMemo, useState } from 'react';
import { getCallingCardOfDay, getArchiveCards } from '../data/callingCards';
import { getMentorLineOfDay } from '../data/mentorLines';
import { loadState, getWeekSummary } from '../utils/storage';
import { STATS } from '../data/config';
import { LaurelDivider, MeanderBorder } from '../components/GreekMotifs';
import VisionCollage from '../components/VisionCollage';

function statName(key) {
  if (!key) return null;
  return STATS.find((s) => s.key === key)?.name;
}

export default function Spark() {
  const [state] = useState(() => loadState());
  const featured = useMemo(() => getCallingCardOfDay(), []);
  const archive = useMemo(() => getArchiveCards(new Date(), undefined, 10), []);
  const mentorLine = useMemo(() => getMentorLineOfDay(), []);
  const week = useMemo(() => getWeekSummary(state), [state]);

  return (
    <div>
      <h1
        className="font-display uppercase tracking-tighter -skew-x-2 mb-2 glitch-text"
        data-text="DECODE THE CHAOS"
        style={{ fontSize: 'clamp(34px, 10vw, 46px)', lineHeight: 0.88 }}
      >
        <span className="block text-on-background">DECODE</span>
        <span className="block text-primary-container">THE CHAOS</span>
      </h1>
      <p className="font-mono text-secondary normal-case mb-4" style={{ fontSize: 11 }}>
        A new calling card — and a word from your corner — arrive every day at noon.
      </p>
      <MeanderBorder className="mb-6" />

      <VisionCollage />

      {/* Featured Calling Card of the day */}
      <div className="bg-surface-container border-2 border-primary p-6 mb-6 relative overflow-hidden hard-shadow">
        <span className="font-mono bg-background text-primary px-2 py-1 inline-block uppercase mb-3" style={{ fontSize: 11 }}>
          Calling Card · Today
        </span>
        <p className="font-display uppercase italic" style={{ fontSize: 26, lineHeight: 1.15 }}>
          {featured.text}
        </p>
        {(featured.source || featured.tag) && (
          <p className="font-mono text-secondary normal-case mt-3" style={{ fontSize: 10 }}>
            {featured.source ? `— ${featured.source}` : `— tuned to ${statName(featured.tag)}`}
          </p>
        )}
        <div className="w-10 h-0.5 bg-primary-container mt-4" />
      </div>

      {/* Mentor — separate voice, separate rotation, clearly labeled */}
      <div className="bg-surface-container-high border-2 border-on-background p-5 mb-8 hard-shadow -skew-x-1">
        <div className="skew-x-1">
          <span className="font-mono bg-on-background text-background px-2 py-1 inline-block uppercase mb-3" style={{ fontSize: 10 }}>
            From Your Corner
          </span>
          <p className="font-body text-lg italic">"{mentorLine.text}"</p>
        </div>
      </div>

      {/* This week's momentum, ties Spark back to real data */}
      <div className="bg-surface-container border-2 border-on-background p-5 mb-8 hard-shadow">
        <h3 className="font-display italic uppercase mb-3" style={{ fontSize: 20 }}>This Week, So Far</h3>
        <p className="font-body text-secondary mb-1">
          {week.totalActions} actions logged · {week.streak} day streak
        </p>
        <p className="font-body text-secondary">
          Strongest stat: <span className="text-primary font-bold">{statName(week.strongest)}</span>
          {' '}— weakest: <span className="text-primary font-bold">{statName(week.weakest)}</span>
        </p>
      </div>

      {/* Directive */}
      <div className="bg-primary-container border-2 border-background hard-shadow p-6 mb-8 text-on-primary-container">
        <span className="font-mono bg-background text-primary px-2 py-1 inline-block uppercase mb-3" style={{ fontSize: 11 }}>
          Directive
        </span>
        <h3 className="font-display italic uppercase mb-3" style={{ fontSize: 26 }}>Destroy The Grid</h3>
        <p className="font-body mb-5">
          Embrace the jagged edges. Smooth interfaces lie to you. The truth is found in the
          friction. Stop waiting for the perfect slot — execute anyway.
        </p>
        <button className="w-full bg-background text-on-background font-display italic uppercase py-3 border-2 border-on-background flex items-center justify-between px-5" style={{ fontSize: 14 }}>
          <span>Initiate Sequence</span><span>→</span>
        </button>
      </div>

      {/* Archive rail of more calling cards */}
      <LaurelDivider className="mb-2" />
      <h2 className="font-display italic uppercase mb-4 text-center" style={{ fontSize: 24 }}>Archive</h2>
      <div className="flex flex-col gap-3 mb-8">
        {archive.map((card, i) => (
          <div
            key={card.id}
            className={`bg-surface-container-high border border-on-background p-4 ${i % 2 === 0 ? '-skew-x-1' : 'skew-x-1'}`}
          >
            {(card.source || card.tag) && (
              <span className="font-mono text-secondary normal-case" style={{ fontSize: 9.5 }}>
                {card.source ? card.source.toUpperCase() : statName(card.tag).toUpperCase()}
              </span>
            )}
            <p className="font-body text-lg mt-1">"{card.text}"</p>
          </div>
        ))}
      </div>

      {/* Why this exists — personal, not a manifesto-for-the-public */}
      <div className="border-t-2 border-on-background pt-6">
        <h3 className="font-display italic uppercase mb-4" style={{ fontSize: 20 }}>Why This Exists</h3>
        <p className="font-body text-secondary" style={{ fontSize: 14, lineHeight: 1.75 }}>
          This isn't motivation. It's evidence. One day you'll need proof you were always capable of this.
          You're not logging tasks. You're building a case against the version of you that almost quit.
        </p>
      </div>

      {/* Fixed line — never changes, never rotates */}
      <div className="mt-10 pt-6 border-t border-on-background/30 text-center">
        <p className="font-mono text-on-surface-variant normal-case italic" style={{ fontSize: 11.5, letterSpacing: '0.02em' }}>
          Live in the real life, remember what took her away.
        </p>
      </div>
    </div>
  );
}
