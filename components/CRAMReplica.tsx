export default function CRAMReplica() {
  return (
    <div className="rounded-xl overflow-hidden border border-[var(--border-dark)] shadow-2xl">
      {/* Browser chrome */}
      <div className="bg-[#1A1917] px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#F62624]" />
          <div className="w-2 h-2 rounded-full bg-[#FAD334]" />
          <div className="w-2 h-2 rounded-full bg-[#2BFE78]" />
        </div>
        <div className="flex-1 bg-[#0D0C0B] rounded px-3 py-1 text-xs font-body text-[var(--text-muted)]">
          cram.internal
        </div>
      </div>

      {/* App content */}
      <div className="flex flex-col md:flex-row" style={{ transform: 'scale(0.85)', transformOrigin: 'top left', width: '117.6%' }}>
        {/* Left panel - Input */}
        <div className="flex-1 bg-white p-5">
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8A8480] mb-4">
            Input Parameters
          </p>

          <div className="space-y-3">
            <div>
              <label className="text-[10px] font-body text-[#8A8480] uppercase tracking-wider">Initiative</label>
              <div className="mt-1 bg-[#F0EAE2] rounded-lg px-3 py-2 text-xs text-[#1A1917] font-body">
                Administrative Burden Reduction
              </div>
            </div>

            <div>
              <label className="text-[10px] font-body text-[#8A8480] uppercase tracking-wider">Buying Job</label>
              <div className="mt-1 bg-[#F0EAE2] rounded-lg px-3 py-2 text-xs text-[#1A1917] font-body">
                Problem Identification
              </div>
            </div>

            <div>
              <label className="text-[10px] font-body text-[#8A8480] uppercase tracking-wider">Primary Engine</label>
              <div className="mt-1 bg-[#F0EAE2] rounded-lg px-3 py-2 text-xs text-[#1A1917] font-body">
                Finance Engine
              </div>
            </div>

            <div>
              <label className="text-[10px] font-body text-[#8A8480] uppercase tracking-wider">Secondary Engines</label>
              <div className="mt-1 flex gap-2">
                <span className="bg-[#F0EAE2] rounded px-2 py-1 text-[10px] text-[#8A8480] font-body">Care Delivery</span>
                <span className="bg-[#FAD334]/20 border border-[#FAD334] rounded px-2 py-1 text-[10px] text-[#1A1917] font-body">Technology</span>
                <span className="bg-[#F0EAE2] rounded px-2 py-1 text-[10px] text-[#8A8480] font-body">Risk</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-body text-[#8A8480] uppercase tracking-wider">Priority</label>
                <div className="mt-1 bg-[#F0EAE2] rounded-lg px-3 py-2 text-xs text-[#1A1917] font-body">High</div>
              </div>
              <div>
                <label className="text-[10px] font-body text-[#8A8480] uppercase tracking-wider">Audience</label>
                <div className="mt-1 bg-[#F0EAE2] rounded-lg px-3 py-2 text-xs text-[#1A1917] font-body">Executive</div>
              </div>
            </div>

            <div>
              <label className="text-[10px] font-body text-[#8A8480] uppercase tracking-wider">Trigger Context</label>
              <div className="mt-1 bg-[#F0EAE2] rounded-lg px-3 py-2 text-xs text-[#1A1917] font-body h-12">
                Delayed
              </div>
            </div>

            <button className="w-full bg-[#FAD334] text-[#1A1917] font-body font-semibold text-xs rounded-lg py-2.5 mt-2 hover:brightness-105 transition-all">
              Generate Recommendation
            </button>
          </div>
        </div>

        {/* Right panel - Output */}
        <div className="flex-1 bg-[#161513] p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[var(--text-muted)]">
              Recommendation
            </p>
            <span className="text-[10px] font-body bg-[#2BFE78]/15 text-[#2BFE78] px-2 py-0.5 rounded-full">
              Result ready
            </span>
          </div>

          {/* Summary card */}
          <div className="bg-[#0D0C0B] rounded-lg p-4 mb-3 space-y-2">
            <div className="flex justify-between">
              <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Initiative</span>
              <span className="text-[10px] text-[var(--text-dark)]">Admin Burden Reduction</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Buying Job</span>
              <span className="text-[10px] text-[var(--text-dark)]">Problem Identification</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Priority</span>
              <span className="text-[10px] text-[var(--text-dark)]">High</span>
            </div>
          </div>

          {/* Result card */}
          <div className="bg-[#0D0C0B] rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-display font-bold text-[var(--text-dark)]">
                POV / Thought Leadership Article
              </p>
              <span className="text-[9px] bg-[#2BFE78]/15 text-[#2BFE78] px-2 py-0.5 rounded-full whitespace-nowrap">
                high confidence
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="text-[9px] bg-[#161513] border border-[#252220] text-[var(--text-muted)] px-2 py-0.5 rounded">
                LinkedIn
              </span>
              <span className="text-[9px] bg-[#161513] border border-[#252220] text-[var(--text-muted)] px-2 py-0.5 rounded">
                Long-form
              </span>
              <span className="text-[9px] bg-[#161513] border border-[#252220] text-[var(--text-muted)] px-2 py-0.5 rounded">
                C-Suite
              </span>
              <span className="text-[9px] bg-[#161513] border border-[#252220] text-[var(--text-muted)] px-2 py-0.5 rounded">
                Finance
              </span>
            </div>

            {/* Content outline */}
            <div className="mt-4 pt-3 border-t border-[#252220]">
              <p className="text-[9px] font-semibold tracking-[0.1em] uppercase text-[var(--text-muted)] mb-2">
                Content Outline
              </p>
              <div className="space-y-2">
                {[
                  { heading: 'I. The Hidden Cost of Manual Workflows', sub: 'Frame the burden through a financial lens' },
                  { heading: 'II. How Leading Health Systems Are Responding', sub: 'Proof point: peer adoption signal' },
                  { heading: 'III. What a Reduction Roadmap Looks Like', sub: 'Practical framework + executive action items' },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-[9px] text-[var(--text-dark)] font-body font-medium leading-snug">{item.heading}</p>
                    <p className="text-[9px] text-[var(--text-muted)] font-body leading-snug pl-2">→ {item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
