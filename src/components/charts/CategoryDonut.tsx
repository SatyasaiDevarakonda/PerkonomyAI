import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { categoryBreakdown } from "@/lib/data";

export function CategoryDonut() {
  const total = categoryBreakdown.reduce((a, b) => a + b.value, 0);
  return (
    <div className="relative h-[220px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={categoryBreakdown}
            innerRadius={60}
            outerRadius={90}
            paddingAngle={3}
            dataKey="value"
            stroke="white"
            strokeWidth={2}
          >
            {categoryBreakdown.map((c) => (
              <Cell key={c.name} fill={c.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(v: number, name) => [`₹${v.toLocaleString("en-IN")}`, name as string]}
            contentStyle={{ borderRadius: 12, border: "1px solid #E8ECF1" }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-2xl font-extrabold h-display">
          ₹{total.toLocaleString("en-IN")}
        </div>
        <div className="text-xs text-ink-500">YTD savings</div>
      </div>
    </div>
  );
}
