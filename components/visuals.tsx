import type { ReactNode } from "react";

export function AmbientBackground({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-violet/10 blur-[100px]" />
      <div className="absolute right-0 top-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/[.07] blur-[120px]" />
      <div className="constellation-grid absolute inset-0 opacity-40" />
    </div>
  );
}

export function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`glass-card ${className}`}>{children}</div>;
}

export function FounderProfileCard() {
  return (
    <GlassCard className="relative overflow-hidden p-6 sm:p-8">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet/20 blur-3xl" />
      <div className="relative flex items-center gap-5">
        <div className="grid h-20 w-20 shrink-0 place-items-center rounded-[22px] border border-line bg-white/5 text-xl font-bold text-accent">AM</div>
        <div>
          <p className="text-xl font-bold">Apurv Mittal</p>
          <p className="mt-1 text-base font-semibold text-accent">Founder, LetsCRUD</p>
        </div>
      </div>
      <p className="relative mt-6 border-t border-line pt-5 text-base leading-relaxed text-muted">
        Business operator, systems thinker, and AI-assisted technology builder.
      </p>
      <div className="relative mt-5 flex flex-wrap gap-2">
        {["Engineering", "Systems Thinking", "Business Operations", "AI-Assisted Delivery"].map((x) => (
          <span key={x} className="rounded-full border border-line bg-white/5 px-3 py-1.5 text-sm font-medium text-muted">{x}</span>
        ))}
      </div>
    </GlassCard>
  );
}
