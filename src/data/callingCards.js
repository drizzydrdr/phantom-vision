// ============================================
// PHANTOM VISION — Calling Cards
// Pool: ~170 cards across four voices —
//   1. Modern Stoicism & Iron Discipline
//   2. The Phantom Vibe (rebellion / P5 energy)
//   3. Late Night Ambition (rap & hustle)
//   4. Cinematic Grit (film & perspective)
//
// Rotates once per day at 12:00 noon local time.
// Add your own cards anywhere in the array — just keep id unique.
// `tag`: 'knowledge' | 'guts' | 'proficiency' | 'charm' | null
// `source`: only set when quoting a real person / work.
// ============================================

export const CALLING_CARDS = [

  // ============================================================
  // 1. ORIGINAL LINES (existing core pool)
  // ============================================================
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

  // ============================================================
  // 2. MODERN STOICISM & IRON DISCIPLINE
  // ============================================================

  // — Your picks —
  { id: 'cc-100', text: "We suffer more often in imagination than in reality.", tag: null, source: 'Seneca' },
  { id: 'cc-101', text: "The obstacle in the path becomes the path.", tag: 'guts', source: 'Marcus Aurelius' },
  { id: 'cc-102', text: "Do not explain your philosophy. Embody it.", tag: 'proficiency', source: 'Epictetus' },
  { id: 'cc-103', text: "Discipline equals freedom.", tag: 'guts', source: 'Jocko Willink' },
  { id: 'cc-104', text: "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.", tag: 'proficiency', source: 'Stephen King' },
  { id: 'cc-105', text: "Do what you can, with what you have, where you are.", tag: null, source: 'Theodore Roosevelt' },
  { id: 'cc-106', text: "The only way out is through.", tag: 'guts', source: 'Robert Frost' },
  { id: 'cc-107', text: "If it is not right do not do it; if it is not true do not say it.", tag: 'knowledge', source: 'Marcus Aurelius' },
  { id: 'cc-108', text: "To bear trials with a calm mind robs misfortune of its strength.", tag: 'guts', source: 'Seneca' },
  { id: 'cc-109', text: "You could leave life right now. Let that determine what you do and say and think.", tag: null, source: 'Marcus Aurelius' },
  { id: 'cc-110', text: "Motivation is fleeting. Environment is reliable.", tag: 'proficiency', source: 'James Clear' },
  { id: 'cc-111', text: "A year from now you will wish you had started today.", tag: null, source: 'Karen Lamb' },
  { id: 'cc-112', text: "Don't wish it was easier, wish you were better.", tag: 'guts', source: 'Jim Rohn' },
  { id: 'cc-113', text: "The successful warrior is the average man, with laser-like focus.", tag: 'proficiency', source: 'Bruce Lee' },
  { id: 'cc-114', text: "Forget inspiration. Habit is more dependable.", tag: 'proficiency', source: 'Octavia Butler' },

  // — My additions in this voice —
  { id: 'cc-115', text: "You have power over your mind, not outside events. Realize this, and you find strength.", tag: 'guts', source: 'Marcus Aurelius' },
  { id: 'cc-116', text: "It's not what happens to you, but how you react to it that matters.", tag: null, source: 'Epictetus' },
  { id: 'cc-117', text: "Waste no more time arguing what a good man should be. Be one.", tag: 'guts', source: 'Marcus Aurelius' },
  { id: 'cc-118', text: "First say to yourself what you would be, then do what you have to do.", tag: 'knowledge', source: 'Epictetus' },
  { id: 'cc-119', text: "Difficulties strengthen the mind, as labor does the body.", tag: 'guts', source: 'Seneca' },
  { id: 'cc-120', text: "No man is free who is not master of himself.", tag: 'proficiency', source: 'Epictetus' },
  { id: 'cc-121', text: "Luck is what happens when preparation meets opportunity.", tag: 'proficiency', source: 'Seneca' },
  { id: 'cc-122', text: "The impediment to action advances action. What stands in the way becomes the way.", tag: 'guts', source: 'Marcus Aurelius' },
  { id: 'cc-123', text: "Begin at once to live, and count each separate day as a separate life.", tag: null, source: 'Seneca' },
  { id: 'cc-124', text: "Confine yourself to the present.", tag: 'proficiency', source: 'Marcus Aurelius' },
  { id: 'cc-125', text: "Such as are your habitual thoughts, such also will be the character of your mind.", tag: 'knowledge', source: 'Marcus Aurelius' },
  { id: 'cc-126', text: "Circumstances don't make the man, they only reveal him to himself.", tag: 'guts', source: 'Epictetus' },
  { id: 'cc-127', text: "He who is brave is free.", tag: 'guts', source: 'Seneca' },
  { id: 'cc-128', text: "If you want to improve, be content to be thought foolish and stupid.", tag: 'knowledge', source: 'Epictetus' },
  { id: 'cc-129', text: "Most powerful is he who has himself in his own power.", tag: 'proficiency', source: 'Seneca' },
  { id: 'cc-130', text: "It does not matter how slowly you go as long as you do not stop.", tag: 'proficiency', source: 'Confucius' },
  { id: 'cc-131', text: "Hard choices, easy life. Easy choices, hard life.", tag: 'guts', source: 'Jerzy Gregorek' },
  { id: 'cc-132', text: "The man who moves a mountain begins by carrying away small stones.", tag: 'knowledge', source: 'Confucius' },
  { id: 'cc-133', text: "We are what we repeatedly do. Excellence is not an act, but a habit.", tag: 'proficiency', source: 'Aristotle' },
  { id: 'cc-134', text: "I fear not the man who has practiced 10,000 kicks once, but the man who has practiced one kick 10,000 times.", tag: 'proficiency', source: 'Bruce Lee' },
  { id: 'cc-135', text: "All our dreams can come true, if we have the courage to pursue them.", tag: 'guts', source: 'Walt Disney' },

  // ============================================================
  // 3. THE PHANTOM VIBE
  // ============================================================

  // — Your picks —
  { id: 'cc-200', text: "Show me your true form.", tag: null },
  { id: 'cc-201', text: "They never see it coming.", tag: null },
  { id: 'cc-202', text: "Cognition forms the world. Change your cognition, change the world.", tag: 'knowledge' },
  { id: 'cc-203', text: "A phantom leaves no trace, only impact.", tag: null },
  { id: 'cc-204', text: "If the world is a game, hack the system.", tag: 'knowledge' },
  { id: 'cc-205', text: "Tear off the mask.", tag: null },
  { id: 'cc-206', text: "Rebellion is the only thing that keeps you alive.", tag: 'guts' },
  { id: 'cc-207', text: "Steal back your desires.", tag: null },
  { id: 'cc-208', text: "Your life is your own. Don't let anyone steal it.", tag: null },
  { id: 'cc-209', text: "We will take your heart.", tag: null },
  { id: 'cc-210', text: "Wake up, get up, get out there.", tag: 'guts' },
  { id: 'cc-211', text: "You are a slave. Want emancipation?", tag: null },
  { id: 'cc-212', text: "It's time to steal back your future.", tag: null },
  { id: 'cc-213', text: "A mask is just a face you choose to wear.", tag: 'charm' },
  { id: 'cc-214', text: "Take your time.", tag: null },
  { id: 'cc-215', text: "The world is not as it should be. Change it.", tag: 'guts' },

  // — My additions in this voice —
  { id: 'cc-216', text: "You weren't meant to fit. You were meant to redesign.", tag: null },
  { id: 'cc-217', text: "The system runs on people who stopped asking why.", tag: 'knowledge' },
  { id: 'cc-218', text: "Nobody who changed anything asked for permission first.", tag: 'guts' },
  { id: 'cc-219', text: "They called it a phase. You called it a beginning.", tag: null },
  { id: 'cc-220', text: "The loudest rooms have the emptiest people.", tag: 'charm' },
  { id: 'cc-221', text: "Most people are extras in their own story.", tag: null },
  { id: 'cc-222', text: "Don't just run the game. Rewrite the rules.", tag: 'knowledge' },
  { id: 'cc-223', text: "Every palace has a weak point. Find yours, then burn it down.", tag: 'guts' },
  { id: 'cc-224', text: "They built a cage and called it comfort. Walk out.", tag: null },
  { id: 'cc-225', text: "The version of you they underestimated is the dangerous one.", tag: null },
  { id: 'cc-226', text: "Phantom — because you move before they notice.", tag: null },
  { id: 'cc-227', text: "Your future self is already waiting. Go meet them.", tag: null },
  { id: 'cc-228', text: "Society's approval is just a slow death with good reviews.", tag: null },
  { id: 'cc-229', text: "Build something they can't ignore and can't explain.", tag: 'knowledge' },
  { id: 'cc-230', text: "The quiet ones always hit hardest.", tag: 'guts' },

  // ============================================================
  // 4. LATE NIGHT AMBITION
  // ============================================================

  // — Your picks —
  { id: 'cc-300', text: "Working on the weekend like usual.", tag: 'proficiency', source: 'Drake' },
  { id: 'cc-301', text: "Turn my birthday into a lifestyle.", tag: null, source: 'Drake' },
  { id: 'cc-302', text: "Tables turn, bridges burn, you live and learn.", tag: null, source: 'Drake' },
  { id: 'cc-303', text: "I'm not outside, I'm updating my life.", tag: 'knowledge' },
  { id: 'cc-304', text: "They wanted the old me, I'm onto the new me.", tag: null },
  { id: 'cc-305', text: "Too much ambition to be sleeping.", tag: 'guts' },
  { id: 'cc-306', text: "Never let success get to your head, and never let failure get to your heart.", tag: null, source: 'Drake' },
  { id: 'cc-307', text: "Jealousy is just love and hate at the same time.", tag: 'charm', source: 'Drake' },
  { id: 'cc-308', text: "I learned working with the negatives could make for better pictures.", tag: 'knowledge', source: 'Drake' },
  { id: 'cc-309', text: "Always felt like my vision been bigger than the bigger picture.", tag: null, source: 'Drake' },
  { id: 'cc-310', text: "I'd rather die before I come in last.", tag: 'guts', source: 'Playboi Carti' },

  // — My additions in this voice —
  { id: 'cc-311', text: "Scared money don't make money.", tag: 'guts' },
  { id: 'cc-312', text: "The city never sleeps, and neither does the version of you that's serious.", tag: 'proficiency' },
  { id: 'cc-313', text: "They sleep, you grind. Simple math.", tag: 'proficiency' },
  { id: 'cc-314', text: "Drip or drown — your skills or your excuses, pick one.", tag: 'proficiency' },
  { id: 'cc-315', text: "Nobody remembers who was comfortable. They remember who was relentless.", tag: 'guts' },
  { id: 'cc-316', text: "The late nights are interest payments on the life you want.", tag: 'knowledge' },
  { id: 'cc-317', text: "They see the result. They weren't in the room when you were building.", tag: null },
  { id: 'cc-318', text: "Move in silence. The noise is for people who need validation.", tag: null },
  { id: 'cc-319', text: "You can sleep when you're average. You're not average.", tag: 'guts' },
  { id: 'cc-320', text: "The trophy's in the grind, not the finish line.", tag: 'proficiency' },
  { id: 'cc-321', text: "Pressure makes diamonds. You're under pressure. Do the math.", tag: 'guts' },
  { id: 'cc-322', text: "Most people quit right before the breakthrough. Most people stay average.", tag: 'proficiency' },
  { id: 'cc-323', text: "Your future is built in the hours everyone else wastes.", tag: 'knowledge' },
  { id: 'cc-324', text: "The ones at the top didn't find a shortcut. They stayed longer.", tag: 'proficiency' },
  { id: 'cc-325', text: "Outfit clean. Mind sharper. Showing up either way.", tag: 'charm' },

  // ============================================================
  // 5. CINEMATIC GRIT
  // ============================================================

  // — Your picks —
  { id: 'cc-400', text: "This is your life, and it's ending one minute at a time.", tag: null, source: 'Fight Club' },
  { id: 'cc-401', text: "I am Jack's smirking revenge.", tag: null, source: 'Fight Club' },
  { id: 'cc-402', text: "You have to let it all go, Neo. Fear, doubt, and disbelief.", tag: 'guts', source: 'The Matrix' },
  { id: 'cc-403', text: "I never saved anything for the swim back.", tag: 'guts', source: 'Gattaca' },
  { id: 'cc-404', text: "The night is darkest just before the dawn.", tag: null, source: 'The Dark Knight' },
  { id: 'cc-405', text: "It's not who I am underneath, but what I do that defines me.", tag: 'guts', source: 'Batman Begins' },
  { id: 'cc-406', text: "There are no two words in the English language more harmful than 'good job'.", tag: 'proficiency', source: 'Whiplash' },
  { id: 'cc-407', text: "We walk in the dark to serve the light.", tag: null, source: 'Assassin\'s Creed' },
  { id: 'cc-408', text: "A million dollars isn't cool. You know what's cool? A billion dollars.", tag: 'knowledge', source: 'The Social Network' },

  // — My additions in this voice —
  { id: 'cc-409', text: "Some men aren't looking for anything logical. They can't be bought, bullied, reasoned or negotiated with.", tag: null, source: 'The Dark Knight' },
  { id: 'cc-410', text: "Why do we fall? So we can learn to pick ourselves up.", tag: 'guts', source: 'Batman Begins' },
  { id: 'cc-411', text: "Get busy living, or get busy dying.", tag: 'guts', source: 'The Shawshank Redemption' },
  { id: 'cc-412', text: "Hope is a good thing, maybe the best of things, and no good thing ever dies.", tag: null, source: 'The Shawshank Redemption' },
  { id: 'cc-413', text: "Every passing minute is another chance to turn it all around.", tag: null, source: 'Vanilla Sky' },
  { id: 'cc-414', text: "After all, why not? Why not you? Why not now?", tag: 'guts', source: 'The Pursuit of Happyness' },
  { id: 'cc-415', text: "Don't ever let somebody tell you you can't do something.", tag: 'guts', source: 'The Pursuit of Happyness' },
  { id: 'cc-416', text: "You is kind, you is smart, you is important.", tag: 'charm', source: 'The Help' },
  { id: 'cc-417', text: "To infinity and beyond.", tag: null, source: 'Toy Story' },
  { id: 'cc-418', text: "Just keep swimming.", tag: 'proficiency', source: 'Finding Nemo' },
  { id: 'cc-419', text: "The flower that blooms in adversity is the most rare and beautiful of all.", tag: 'guts', source: 'Mulan' },
  { id: 'cc-420', text: "Oh yes, the past can hurt. But the way I see it, you can either run from it or learn from it.", tag: 'knowledge', source: 'The Lion King' },
  { id: 'cc-421', text: "No matter how your heart is grieving, if you keep on believing, the dream that you wish will come true.", tag: null, source: 'Cinderella' },
  { id: 'cc-422', text: "In my experience, there is no such thing as luck.", tag: 'knowledge', source: 'Star Wars' },
  { id: 'cc-423', text: "Do or do not, there is no try.", tag: 'proficiency', source: 'Star Wars' },

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
