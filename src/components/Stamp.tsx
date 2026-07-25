"use client";

import { useReveal } from "@/lib/useReveal";

export function Stamp({
  top,
  bottom,
  size = 128,
  className = "",
}: {
  top: string;
  bottom: string;
  size?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.4);
  const r = size / 2 - 6;
  const circumference = 2 * Math.PI * r;

  return (
    <div
      ref={ref}
      className={`relative inline-flex select-none items-center justify-center ${visible ? "stamp-visible" : ""} ${className}`}
      style={{ width: size, height: size, ["--stamp-length" as string]: circumference }}
    >
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} className="absolute inset-0">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--color-stamp)"
          strokeWidth={2.5}
          className="stamp-ring"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r - 10}
          fill="none"
          stroke="var(--color-stamp)"
          strokeWidth={1}
          strokeDasharray="2 5"
          opacity={visible ? 0.6 : 0}
          style={{ transition: "opacity 0.6s ease 0.8s" }}
        />
      </svg>
      <div
        className="flex flex-col items-center justify-center text-center leading-none text-[color:var(--color-stamp)]"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.6s" }}
      >
        <span className="font-mono text-[0.62rem] font-semibold tracking-[0.08em] uppercase font-figure">
          {top}
        </span>
        <span className="mt-1 font-mono text-[0.6rem] tracking-[0.06em] uppercase font-figure opacity-80">
          {bottom}
        </span>
      </div>
    </div>
  );
}
