export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatINR(value: number, opts: { compact?: boolean } = {}) {
  if (opts.compact) {
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} cr`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(2)} L`;
    if (value >= 1000) return `₹${(value / 1000).toFixed(1)}k`;
  }
  return `₹${value.toLocaleString("en-IN")}`;
}

export function relativeDate(daysFromNow: number) {
  if (daysFromNow === 0) return "Today";
  if (daysFromNow === 1) return "Tomorrow";
  if (daysFromNow < 0) return `${Math.abs(daysFromNow)}d ago`;
  return `In ${daysFromNow} days`;
}
