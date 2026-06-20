// ============================================
// PHANTOM VISION — localStorage persistence layer
// ============================================
import { ALL_ACTIONS, STATS, POINTS_PER_LEVEL, MAX_LEVEL } from '../data/config';

const STORAGE_KEY = 'phantom-vision-state-v1';

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { days: {} };
    const parsed = JSON.parse(raw);
    if (!parsed.days) parsed.days = {};
    return parsed;
  } catch (e) {
    console.error('Failed to load state', e);
    return { days: {} };
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save state', e);
  }
}

export function todayKey(date = new Date()) {
  const d = new Date(date);
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

export function getDayActions(state, dateKey) {
  return (state.days[dateKey] && state.days[dateKey].actions) || {};
}

export function toggleAction(state, dateKey, actionId) {
  const next = { ...state, days: { ...state.days } };
  const existingDay = next.days[dateKey] || { actions: {} };
  const nextActions = { ...existingDay.actions };
  nextActions[actionId] = !nextActions[actionId];
  next.days[dateKey] = { actions: nextActions };
  return next;
}

export function computeTotals(state) {
  const totals = {};
  STATS.forEach((s) => { totals[s.key] = 0; });

  Object.values(state.days).forEach((day) => {
    Object.entries(day.actions || {}).forEach(([actionId, isOn]) => {
      if (!isOn) return;
      const action = ALL_ACTIONS.find((a) => a.id === actionId);
      if (!action) return;
      action.stats.forEach(({ key, weight }) => {
        totals[key] = (totals[key] || 0) + weight;
      });
    });
  });

  return totals;
}

export function computeDayTotals(dayActions) {
  const totals = {};
  STATS.forEach((s) => { totals[s.key] = 0; });
  Object.entries(dayActions || {}).forEach(([actionId, isOn]) => {
    if (!isOn) return;
    const action = ALL_ACTIONS.find((a) => a.id === actionId);
    if (!action) return;
    action.stats.forEach(({ key, weight }) => {
      totals[key] = (totals[key] || 0) + weight;
    });
  });
  return totals;
}

export function levelFromTotal(total) {
  return Math.min(MAX_LEVEL, Math.floor(total / POINTS_PER_LEVEL) + 1);
}

export function progressInLevel(total) {
  const rem = total % POINTS_PER_LEVEL;
  return (rem / POINTS_PER_LEVEL) * 100;
}

export function dayHasActivity(state, dateKey) {
  const actions = getDayActions(state, dateKey);
  return Object.values(actions).some(Boolean);
}

export function computeStreak(state) {
  let streak = 0;
  let cursor = new Date();
  const tKey = todayKey(cursor);
  if (!dayHasActivity(state, tKey)) {
    cursor.setDate(cursor.getDate() - 1);
  }
  while (true) {
    const key = todayKey(cursor);
    if (dayHasActivity(state, key)) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
}

export function getRecentDays(state, n = 30) {
  const out = [];
  const cursor = new Date();
  for (let i = 0; i < n; i++) {
    const key = todayKey(cursor);
    const actions = getDayActions(state, key);
    out.unshift({
      key,
      date: new Date(cursor),
      actions,
      totals: computeDayTotals(actions),
      hasActivity: Object.values(actions).some(Boolean),
    });
    cursor.setDate(cursor.getDate() - 1);
  }
  return out;
}

// summary for "this week so far" used on the Spark page
export function getWeekSummary(state) {
  const days = getRecentDays(state, 7);
  const totalActions = days.reduce(
    (sum, d) => sum + Object.values(d.actions).filter(Boolean).length,
    0
  );
  const streak = computeStreak(state);

  const weekTotals = {};
  STATS.forEach((s) => { weekTotals[s.key] = 0; });
  days.forEach((d) => {
    Object.entries(d.totals).forEach(([k, v]) => { weekTotals[k] += v; });
  });

  let strongest = STATS[0].key;
  let weakest = STATS[0].key;
  STATS.forEach((s) => {
    if (weekTotals[s.key] > weekTotals[strongest]) strongest = s.key;
    if (weekTotals[s.key] < weekTotals[weakest]) weakest = s.key;
  });

  return { totalActions, streak, weekTotals, strongest, weakest };
}
