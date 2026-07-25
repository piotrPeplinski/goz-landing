"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Mouse-tracked 3D tilt, applied via direct style writes (no re-render per move)
 * so it stays smooth. Resting state is flat; the world's Flat Ledger Rule means
 * depth here comes from rotation + a hard offset shadow (added by the caller),
 * never a blurred glow.
 */
export function TiltCard({
  children,
  className = "",
  maxTilt = 9,
  lift = 14,
  style,
}: {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  lift?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - py) * maxTilt * 2;
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${lift}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-150 ease-out will-change-transform ${className}`}
      style={{ transformStyle: "preserve-3d", ...style }}
    >
      {children}
    </div>
  );
}
