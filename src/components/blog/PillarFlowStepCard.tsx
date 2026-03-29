type PillarFlowStepCardProps = {
  step: number;
  title: string;
  description: string;
  /** Stagger delay for fade-up (ms) */
  delayMs?: number;
};

/**
 * Shared flow step card for blog pillar pages (CRM / booking / follow-up guides).
 * Kept identical across pages for layout, height, and motion.
 */
export function PillarFlowStepCard({ step, title, description, delayMs = 0 }: PillarFlowStepCardProps) {
  return (
    <div
      className="h-full opacity-0 translate-y-6 animate-fade-up"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-slate-900 p-6 text-white transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
          aria-hidden
        />
        <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-between">
          <div>
            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#00a29a] text-sm font-semibold">
              {step}
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
          </div>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">{description}</p>
        </div>
      </div>
    </div>
  );
}
