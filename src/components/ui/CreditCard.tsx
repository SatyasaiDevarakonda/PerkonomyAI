import { Card } from "@/lib/data";
import { formatINR } from "@/lib/utils";

export function CreditCardVisual({
  card,
  size = "md",
  selected = false,
  onClick,
}: {
  card: Card;
  size?: "sm" | "md" | "lg";
  selected?: boolean;
  onClick?: () => void;
}) {
  const dims =
    size === "sm"
      ? "h-32 w-52 text-xs"
      : size === "lg"
      ? "h-56 w-96 text-sm"
      : "h-44 w-72 text-sm";

  return (
    <button
      type="button"
      onClick={onClick}
      style={{ background: card.color }}
      className={
        "relative rounded-2xl p-5 text-white text-left shadow-pop transition will-change-transform " +
        dims +
        (selected
          ? " ring-4 ring-saffron-400 ring-offset-2 ring-offset-white scale-[1.02]"
          : " ring-1 ring-white/10 hover:scale-[1.01] hover:shadow-2xl")
      }
    >
      {/* sparkle overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/15 via-transparent to-black/20 pointer-events-none" />
      <div className="relative flex items-start justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-widest opacity-80">{card.bank}</div>
          <div className="font-semibold tracking-wide mt-0.5">{card.name}</div>
        </div>
        <div className="text-[10px] font-bold tracking-widest opacity-90">
          {card.network.toUpperCase()}
        </div>
      </div>
      <div className="relative mt-6 font-mono tracking-[0.3em] text-base sm:text-lg">
        •••• •••• •••• {card.last4}
      </div>
      <div className="relative mt-4 flex items-end justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-widest opacity-70">Points</div>
          <div className="font-semibold">{card.pointsBalance.toLocaleString("en-IN")}</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] uppercase tracking-widest opacity-70">Worth</div>
          <div className="font-semibold">{formatINR(card.pointsValueINR)}</div>
        </div>
      </div>
    </button>
  );
}
