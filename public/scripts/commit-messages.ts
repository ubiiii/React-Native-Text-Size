/**
 * Dynamic commit messages for this repository.
 * Used by sync-content.ts when creating contribution commits.
 * Rotate or edit these strings to keep commit history varied.
 */

export const COMMIT_MESSAGES: string[] = [
  'feat(measure): improve flatHeights batch accuracy',
  'fix(android): respect includeFontPadding flag',
  'refactor(native): simplify measure bridge payload',
  'docs(readme): expand TSMeasureParams examples',
  'perf(bridge): reduce measure round-trips',
  'fix(ios): correct lastLineWidth for wrapped text',
  'feat(api): expose specsForTextStyles helper',
  'test(measure): cover multi-line width constraints',
  'style(types): clarify TSHeightsParams fields',
  'chore(types): export font info interfaces',
  'fix(android): honor textBreakStrategy options',
  'feat(example): demo precompute FlatList heights',
  'docs(api): document allowFontScaling behavior',
  'refactor(utils): share font spec normalization',
  'chore(lint): clean unused native stubs',
  'perf(heights): speed up array text measurement',
  'fix(measure): handle empty string without NaN',
  'feat(fonts): list available family names API',
  'chore(build): refresh native module notes',
  'docs(changelog): note text size measure fixes',
];

/**
 * Pick a commit message by index (stable rotation).
 */
export function pickCommitMessage(index: number): string {
  const i = ((index % COMMIT_MESSAGES.length) + COMMIT_MESSAGES.length) % COMMIT_MESSAGES.length;
  return COMMIT_MESSAGES[i];
}

/**
 * Pick a commit message from a date string seed (uneven but deterministic).
 */
export function pickCommitMessageFromDate(dateKey: string): string {
  let hash = 0;
  for (let i = 0; i < dateKey.length; i++) {
    hash = (hash * 31 + dateKey.charCodeAt(i)) >>> 0;
  }
  return COMMIT_MESSAGES[hash % COMMIT_MESSAGES.length];
}
