// ============================================
// PHANTOM VISION — core data model
// Edit this file to change stats, slots, or actions.
// ============================================

export const STATS = [
  { key: 'knowledge', name: 'Knowledge', tag: 'KNW', color: '#ffb4a8' },
  { key: 'guts', name: 'Guts', tag: 'GUT', color: '#ffb4a8' },
  { key: 'proficiency', name: 'Proficiency', tag: 'PRO', color: '#ffb4a8' },
  { key: 'charm', name: 'Charm', tag: 'CHM', color: '#ffb4a8' },
];

// Each action has a stable id (storage key), a label, the slot it lives in,
// and one or two stat contributions with a weight (defaults effectively to 1).
export const SLOTS = [
  {
    id: 'work',
    label: 'Work',
    timeTag: '10—18',
    time: '10:00 — 18:00',
    note: 'low energy · low focus',
    actions: [
      { id: 'meditation', label: 'Meditation', stats: [{ key: 'proficiency', weight: 1 }] },
      { id: 'odoo-video', label: 'Odoo Video / Doc', stats: [{ key: 'knowledge', weight: 1 }] },
      { id: 'flashcards', label: 'Flashcards / Review', stats: [{ key: 'knowledge', weight: 1 }] },
    ],
  },
  {
    id: 'afterwork',
    label: 'After Work',
    timeTag: '18—21',
    time: '18:30 — 21:00',
    note: 'body + energy',
    actions: [
      { id: 'gym', label: 'Gym Session', stats: [{ key: 'guts', weight: 1 }] },
      { id: 'guitar-practice', label: 'Guitar Practice', stats: [{ key: 'proficiency', weight: 1 }] },
      { id: 'grooming', label: 'Style / Grooming Upgrade', stats: [{ key: 'charm', weight: 1 }] },
    ],
  },
  {
    id: 'evening',
    label: 'Evening',
    timeTag: '21—01',
    time: '21:00 — 01:00',
    note: 'mind + building',
    actions: [
      { id: 'odoo-deep', label: 'Deep Odoo Study', stats: [{ key: 'knowledge', weight: 1 }] },
      { id: 'guitar-focused', label: 'Guitar (Focused)', stats: [{ key: 'proficiency', weight: 1 }] },
      { id: 'social-outing', label: 'Social Outing', stats: [{ key: 'charm', weight: 1 }] },
      { id: 'movie', label: 'Movie', stats: [{ key: 'knowledge', weight: 0.5 }, { key: 'charm', weight: 0.5 }] },
      { id: 'cooking', label: 'Cooking (Post-Workout Meal)', stats: [{ key: 'guts', weight: 0.5 }, { key: 'charm', weight: 0.5 }] },
    ],
  },
];

export const ALL_ACTIONS = SLOTS.flatMap((slot) =>
  slot.actions.map((a) => ({ ...a, slotId: slot.id, slotLabel: slot.label }))
);

export const POINTS_PER_LEVEL = 5;
export const MAX_LEVEL = 99;
