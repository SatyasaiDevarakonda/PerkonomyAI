import { surveyFindings } from "@/lib/data";

export function SurveyBars() {
  return (
    <div className="space-y-4">
      {surveyFindings.map((s) => (
        <div key={s.label}>
          <div className="flex items-baseline justify-between text-sm">
            <span className="font-medium text-ink-800">{s.label}</span>
            <span className="font-extrabold text-brand-700 h-display tabular-nums">{s.value}%</span>
          </div>
          <div className="mt-1.5 h-2.5 rounded-full bg-ink-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-600 to-saffron-500"
              style={{ width: `${s.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
