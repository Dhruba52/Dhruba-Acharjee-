import React, { useState } from 'react';
import { 
  GitCommit, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Zap, 
  ChevronRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { TIMELINE_STAGES } from '../data/portfolioData.ts';
import { playClick } from '../utils/audio.ts';

export const JourneySection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<number>(1); // 0-indexed; default to stage 02 or 03

  return (
    <section id="journey" className="relative py-24 bg-[#07090e] border-t border-slate-900 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>TRAJECTORY ENGINE // CHRONOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            STUDENT <span className="text-cyan-400">→</span> CREATOR <span className="text-purple-400">→</span> ENTREPRENEUR
          </h2>
          <p className="text-slate-400 font-mono text-sm sm:text-base">
            “I’m not finished yet. I’m building myself, my skills, my projects, and eventually my own ventures.”
          </p>
        </div>

        {/* Interactive Stages Navigator (Horizontal on Desktop, Stack on Mobile) */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-2 bg-slate-950/80 rounded-2xl border border-slate-800 backdrop-blur-md">
            {TIMELINE_STAGES.map((stage, idx) => {
              const isSelected = selectedStage === idx;
              return (
                <button
                  key={stage.stageNumber}
                  onClick={() => {
                    playClick();
                    setSelectedStage(idx);
                  }}
                  className={`p-3.5 rounded-xl text-left transition-all duration-300 relative group cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border border-cyan-500/50 shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                      : 'hover:bg-slate-900/60 border border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40' : 'bg-slate-900 text-slate-400'
                    }`}>
                      STAGE {stage.stageNumber}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${
                      stage.status === 'Completed' 
                        ? 'bg-cyan-400' 
                        : stage.status === 'Current' 
                        ? 'bg-purple-400 animate-ping' 
                        : 'bg-emerald-400'
                    }`} />
                  </div>
                  <div className="text-sm font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {stage.title}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 truncate mt-0.5">
                    {stage.status}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Focused Stage Detail Display */}
        {(() => {
          const current = TIMELINE_STAGES[selectedStage];
          return (
            <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/90 border border-cyan-500/30 shadow-[0_0_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left overview */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono text-cyan-300">
                      STAGE {current.stageNumber} OF 05
                    </span>
                    <span className={`px-2.5 py-1 rounded text-xs font-mono border ${
                      current.status === 'Current'
                        ? 'bg-purple-950/60 border-purple-500/40 text-purple-300'
                        : current.status === 'Completed'
                        ? 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300'
                        : 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                    }`}>
                      {current.status === 'Current' ? '⚡ CURRENTLY IN EXECUTION' : current.status === 'Completed' ? '✓ FOUNDATION CONQUERED' : '🚀 UPCOMING VENTURE HORIZON'}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
                    {current.title} : <span className="text-cyan-400">{current.subtitle}</span>
                  </h3>

                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
                    {current.description}
                  </p>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => {
                        playClick();
                        setSelectedStage((prev) => (prev > 0 ? prev - 1 : TIMELINE_STAGES.length - 1));
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs font-mono text-slate-300 cursor-pointer"
                    >
                      ← Previous Stage
                    </button>
                    <button
                      onClick={() => {
                        playClick();
                        setSelectedStage((prev) => (prev + 1) % TIMELINE_STAGES.length);
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-xs font-mono text-cyan-300 cursor-pointer flex items-center gap-1"
                    >
                      <span>Next Stage</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right achievements check list */}
                <div className="lg:col-span-5 p-6 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider pb-2 border-b border-slate-800">
                    <Sparkles className="w-4 h-4" />
                    <span>Milestones & Concrete Milestones</span>
                  </div>

                  <div className="space-y-3">
                    {current.achievements.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-0.5 p-1 rounded bg-cyan-950 border border-cyan-500/30 text-cyan-400 shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm text-slate-300 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 text-[11px] font-mono text-slate-500 border-t border-slate-900 flex items-center justify-between">
                    <span>STATUS: RECURSIVE ITERATION</span>
                    <span className="text-cyan-400">JSTU NODE</span>
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};
