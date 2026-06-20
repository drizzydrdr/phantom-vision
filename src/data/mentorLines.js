// ============================================
// PHANTOM VISION — Mentor Lines
// A separate, labeled section on the Spark page: a sharp, slightly
// sarcastic, ultimately caring "in your corner" voice. Original lines only,
// not transcribed from any specific character — same functional role as
// a mentor who pushes you to actually move, not just feel inspired.
//
// Rotates independently from the Calling Cards, also flips at noon.
// To add your own: append to MENTOR_LINES below. No `tag`/`source` needed.
// ============================================

export const MENTOR_LINES = [
  { id: 'ml-001', text: "Reading this isn't the work. Go do the work." },
  { id: 'ml-002', text: "You've got the plan. You've had the plan for weeks. Move." },
  { id: 'ml-003', text: "Tired isn't the same as done. Don't confuse the two." },
  { id: 'ml-004', text: "I'm not impressed by intentions. Show me the logged action." },
  { id: 'ml-005', text: "You always feel like this before you start. It passes the second you move." },
  { id: 'ml-006', text: "One slot today. That's all I'm asking. Don't overthink it." },
  { id: 'ml-007', text: "You don't need motivation. You need ten minutes and a closed door." },
  { id: 'ml-008', text: "Skipping today doesn't erase yesterday. So why are you treating it like it does?" },
  { id: 'ml-009', text: "Nobody's grading the bad days. They're grading whether you showed up the day after." },
  { id: 'ml-010', text: "You're stalling. I can tell. Pick the smallest action and start there." },
  { id: 'ml-011', text: "The version of you that quits tonight has to explain it to the version that doesn't, tomorrow." },
  { id: 'ml-012', text: "Good. You're here. Now do one thing before you close this tab." },
  { id: 'ml-013', text: "You don't have to feel ready. Ready is a myth. Just start." },
  { id: 'ml-014', text: "I've seen your stats. You're better than the excuse you're about to make." },
  { id: 'ml-015', text: "This is the part where most people stop. Don't be most people." },
  { id: 'ml-016', text: "You don't need a sign. This is the sign. Go." },
  { id: 'ml-017', text: "Small effort beats big intention every single time. Pick small. Do it now." },
  { id: 'ml-018', text: "You keep waiting for the version of today with no obstacles. That day's not coming." },
  { id: 'ml-019', text: "Stop negotiating with yourself. You already know what you're supposed to do." },
  { id: 'ml-020', text: "However bad the day was, you can still end it with one logged action." },
  { id: 'ml-021', text: "You don't owe anyone a perfect streak. You owe yourself a real one." },
  { id: 'ml-022', text: "I'm not here to make you feel good. I'm here to make sure you don't lie to yourself." },
  { id: 'ml-023', text: "The plan was never the hard part. Starting is. So start." },
  { id: 'ml-024', text: "You'll regret the version of tonight where you didn't even try. Don't build that memory." },
  { id: 'ml-025', text: "Whatever's loud in your head right now — it's quieter once you're moving." },
];

// Same noon-flip logic as Calling Cards, independent rotation (different
// pool/seed offset so it doesn't sync identically with the Calling Card).
export function getMentorLineOfDay(date = new Date(), pool = MENTOR_LINES) {
  const d = new Date(date);
  const isPastNoon = d.getHours() >= 12;
  if (!isPastNoon) d.setDate(d.getDate() - 1);

  // different seed multiplier than callingCards so the two pools don't
  // advance in lockstep
  const seed = d.getFullYear() * 521 + d.getMonth() * 47 + d.getDate() * 7;
  const index = seed % pool.length;
  return pool[index];
}
