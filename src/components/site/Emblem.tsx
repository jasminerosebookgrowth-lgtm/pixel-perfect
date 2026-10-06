import { useEffect, useState } from "react";

export function EmblemMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="em-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--gold-soft)" />
          <stop offset=".5" stopColor="var(--gold)" />
          <stop offset="1" stopColor="var(--gold)" />
        </linearGradient>
        <linearGradient id="em-p" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--primary)" />
          <stop offset="1" stopColor="var(--primary-deep)" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#em-p)" />
      <rect x="3" y="3" width="58" height="58" rx="11.5" fill="none" stroke="url(#em-g)" strokeWidth="1.5" />
      <path d="M17 14h14c11 0 19 7.5 19 18s-8 18-19 18H17z" fill="none" stroke="url(#em-g)" strokeWidth="5" strokeLinejoin="round" />
      <path d="M23 40l7-8 5 4 8-10M38 25h6v6" fill="none" stroke="var(--on-dark)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** 3D emblem: front face, gold edge layers for depth, back face. */
export function RotatingEmblem() {
  return (
    <div className="emblem-stage" aria-hidden="true">
      <div className="emblem-glow" />
      <div className="emblem-spin">
        {[-6, -4, -2, 0, 2, 4, 6].map((z) => (
          <div key={z} className="emblem-layer emblem-edge" style={{ transform: `translateZ(${z}px)` }} />
        ))}
        <div className="emblem-layer" style={{ transform: "translateZ(8px)" }}><EmblemMark className="h-full w-full" /></div>
        <div className="emblem-layer" style={{ transform: "rotateY(180deg) translateZ(8px)" }}><EmblemMark className="h-full w-full -scale-x-100" /></div>
      </div>
    </div>
  );
}

export function PageLoader() {
  const [state, setState] = useState<"show" | "fade" | "done">("show");
  useEffect(() => {
    if (sessionStorage.getItem("dt-loaded")) { setState("done"); return; }
    sessionStorage.setItem("dt-loaded", "1");
    const a = setTimeout(() => setState("fade"), 1300);
    const b = setTimeout(() => setState("done"), 1800);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, []);
  if (state === "done") return null;
  return (
    <div className={`loader-screen ${state === "fade" ? "opacity-0" : "opacity-100"}`} aria-hidden="true">
      <div className="loader-emblem"><EmblemMark className="h-full w-full" /></div>
    </div>
  );
}
