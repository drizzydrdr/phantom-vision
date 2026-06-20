// ============================================
// PHANTOM VISION — Calling Cards
// The quote/motivation pool shown on the Spark page.
// One is "featured" per day, rotating automatically at 12:00 (noon) local time.
//
// To add your own cards: append to CALLING_CARDS below.
// `tag` should be one of: 'knowledge' | 'guts' | 'proficiency' | 'charm' | null
// (null = general / not tied to a specific stat)
// ============================================

export const CALLING_CARDS = [
  { id: 'cc-001', text: "Take it back — your own way of life.", tag: null },
  { id: 'cc-002', text: "A single spark of innovation breeds chaos in the system.", tag: 'guts' },
  { id: 'cc-003', text: "The way you live is what makes you who you are.", tag: 'knowledge' },
  { id: 'cc-004', text: "Even a single moment can be a treasure.", tag: 'charm' },
  { id: 'cc-005', text: "Power is no fun if you don't use it.", tag: 'proficiency' },
  { id: 'cc-006', text: "Rules are made to be broken, for the sake of those who suffer.", tag: null },
  { id: 'cc-007', text: "Don't let your dreams be dreams.", tag: null },
  { id: 'cc-008', text: "A bond, once forged, will never disappear, even if you wanted it to.", tag: 'charm' },
  { id: 'cc-009', text: "The world will never change through the efforts of only one person.", tag: 'guts' },
  { id: 'cc-010', text: "Sometimes the smallest step in the right direction ends up being the biggest step of your life.", tag: 'proficiency' },
  { id: 'cc-011', text: "I am the pillar of order amidst this chaos.", tag: null },
  { id: 'cc-012', text: "It's not about whether you can. It's about whether you will.", tag: 'guts' },
  { id: 'cc-013', text: "There's always going to be people who try to tear you down. Don't let them win.", tag: 'guts' },
  { id: 'cc-014', text: "Real freedom is having nothing left to lose.", tag: null },
  { id: 'cc-015', text: "Your potential is the sum of every choice you haven't made yet.", tag: 'knowledge' },
  { id: 'cc-016', text: "Discipline is choosing between what you want now and what you want most.", tag: 'proficiency' },
  { id: 'cc-017', text: "The cave you fear to enter holds the treasure you seek.", tag: 'guts' },
  { id: 'cc-018', text: "Small consistent actions beat rare heroic ones.", tag: 'proficiency' },
  { id: 'cc-019', text: "You don't have to see the whole staircase, just take the first step.", tag: null },
  { id: 'cc-020', text: "Comfort is the enemy of progress.", tag: 'guts' },
  { id: 'cc-021', text: "What you do today shapes who shows up tomorrow.", tag: 'knowledge' },
  { id: 'cc-022', text: "Charm isn't given. It's built, one deliberate choice at a time.", tag: 'charm' },
  { id: 'cc-023', text: "Knowledge without action is just trivia.", tag: 'knowledge' },
  { id: 'cc-024', text: "The body achieves what the mind believes.", tag: 'guts' },
  { id: 'cc-025', text: "Practice doesn't make perfect. Practice makes permanent. Make it count.", tag: 'proficiency' },
  { id: 'cc-026', text: "Every rep, every page, every rehearsal — they all vote on who you become.", tag: null },
  { id: 'cc-027', text: "Stillness is not the absence of progress. Sometimes it's where progress is built.", tag: 'proficiency' },
  { id: 'cc-028', text: "You are not behind. You are exactly on the timeline you're building.", tag: null },
  { id: 'cc-029', text: "Confidence is a record you build with yourself, not a feeling you wait for.", tag: 'charm' },
  { id: 'cc-030', text: "The version of you a year from now is being negotiated today.", tag: null },
];

// Returns the calling card for "today", changing automatically at 12:00 noon
// local time. Before noon, it shows yesterday's card (so the morning still has
// continuity); after noon, today's.
export function getCallingCardOfDay(date = new Date(), pool = CALLING_CARDS) {
  const d = new Date(date);
  const isPastNoon = d.getHours() >= 12;
  if (!isPastNoon) d.setDate(d.getDate() - 1);

  // stable day-index seed
  const seed = d.getFullYear() * 372 + d.getMonth() * 31 + d.getDate();
  const index = seed % pool.length;
  return pool[index];
}

// returns N cards (excluding the featured one) for the archive rail,
// deterministically shuffled per day so it still feels fresh but is stable
// within the same day.
export function getArchiveCards(date = new Date(), pool = CALLING_CARDS, count = 4) {
  const featured = getCallingCardOfDay(date, pool);
  const rest = pool.filter((c) => c.id !== featured.id);

  const d = new Date(date);
  const seed = d.getFullYear() * 372 + d.getMonth() * 31 + d.getDate();

  // simple deterministic shuffle (Fisher-Yates with seeded PRNG)
  let s = seed;
  function rand() {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  }
  const arr = [...rest];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}
