import { ReactNode } from "react";

export function MobileFrame({
  children,
  caption,
  size = "md",
}: {
  children: ReactNode;
  caption?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dims =
    size === "sm"
      ? "w-[260px] h-[540px]"
      : size === "lg"
      ? "w-[340px] h-[700px]"
      : "w-[300px] h-[620px]";

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className={
          "relative rounded-[2.5rem] bg-ink-900 p-3 shadow-pop ring-1 ring-ink-800 " +
          dims
        }
      >
        {/* notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 h-5 w-24 rounded-b-2xl bg-ink-900" />
        {/* screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-white">
          <div className="flex items-center justify-between bg-white px-5 pt-2 pb-1 text-[10px] font-medium text-ink-500">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-money-500" />
              5G
              <span className="ml-2">100%</span>
            </span>
          </div>
          <div className="h-[calc(100%-22px)] overflow-y-auto">{children}</div>
        </div>
      </div>
      {caption ? (
        <p className="text-xs text-ink-500 text-center max-w-[260px]">{caption}</p>
      ) : null}
    </div>
  );
}
