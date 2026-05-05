import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { monthlySavings } from "@/lib/data";

export function SavingsChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={monthlySavings} margin={{ top: 8, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1F4E79" stopOpacity={0.55} />
            <stop offset="100%" stopColor="#1F4E79" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#E8ECF1" />
        <XAxis dataKey="month" stroke="#6C7E94" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#6C7E94" fontSize={12} tickLine={false} axisLine={false}
               tickFormatter={(v) => `₹${(v / 1000).toFixed(1)}k`} />
        <Tooltip
          formatter={(v: number) => [`₹${v.toLocaleString("en-IN")}`, "Saved"]}
          contentStyle={{ borderRadius: 12, border: "1px solid #E8ECF1" }}
        />
        <Area type="monotone" dataKey="saving" stroke="#1F4E79" strokeWidth={2.5} fill="url(#g1)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
