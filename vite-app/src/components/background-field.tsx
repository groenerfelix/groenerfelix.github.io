export function BackgroundField() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-x-[-15%] top-[-18%] h-136 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,213,0,0.22),rgba(255,213,0,0.04)_32%,rgba(255,213,0,0)_64%)] blur-3xl" />
      <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[72px_72px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_38%),linear-gradient(180deg,rgba(6,6,7,0.3),rgba(6,6,7,0.92)_28%,rgba(6,6,7,1))]" />
    </div>
  )
}
