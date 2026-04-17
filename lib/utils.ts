// Tiny class-name merge utility. Filters falsy values, joins with space.
// No external deps; enough for our needs.
export function cn(...classes: Array<string | undefined | null | false>): string {
  return classes.filter(Boolean).join(' ')
}
