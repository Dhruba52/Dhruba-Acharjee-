import React from 'react';
import { 
  Rocket, 
  ArrowRight, 
  Cpu, 
  Sparkles, 
  Users, 
  TrendingUp, 
  Globe2, 
  Layers,
  ChevronRight,
  ShieldCheck,
  Plus
} from 'lucide-react';
import { ENTREPRENEURSHIP_DATA } from '../data/portfolioData.ts';

export const EntrepreneurshipSection: React.FC = () => {
  return (
    <section id="mission" className="relative py-28 bg-[#05070c] border-t border-cyan-500/20 overflow-hidden">
      
      {/* Visual differentiation: Ambient blueprint grid and golden-cyan radial mesh */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/50 text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <Rocket className="w-3.5 h-3.5 text-cyan-400" />
            <span>VENTURE TRAJECTORY // THE LONG-TERM HORIZON</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight">
            THE BIGGER <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">MISSION</span>
          </h2>

          <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-slate-900/60 to-purple-950/30 border border-cyan-500/30">
            <blockquote className="text-lg sm:text-2xl font-display font-bold text-white tracking-wide leading-snug">
              {ENTREPRENEURSHIP_DATA.quote}
            </blockquote>
          </div>

          <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
            My future ambition is to synthesize rigorous electrical engineering, artificial intelligence, creative storytelling, and leadership into commercial technology-driven ventures and sustainable enterprises.
          </p>
        </div>

        {/* The 5-Element Synthesis Equation */}
        <div className="mb-20">
          <div className="text-center mb-6">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              The Value Multiplier Formula
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
            {ENTREPRENEURSHIP_DATA.coreEquation.map((item, idx) => (
              <React.Fragment key={item.term}>
                <div className="p-4 sm:p-5 rounded-xl bg-slate-950/90 border border-slate-800 hover:border-cyan-500/50 transition-all text-center min-w-[140px] sm:min-w-[170px] shadow-[0_4px_20px_rgba(0,0,0,0.5)] group">
                  <div className="text-base sm:text-lg font-display font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {item.term}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    {item.desc}
                  </div>
                </div>

                {idx < ENTREPRENEURSHIP_DATA.coreEquation.length - 1 && (
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400 select-none">
                    +
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-300 bg-purple-950/40 px-3 py-1 rounded-full border border-purple-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>= Innovative Products, Companies & Impactful Tech Ventures</span>
            </div>
          </div>
        </div>

        {/* Animated Futuristic Roadmap: Learn → Build → Lead → Create → Scale */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              Strategic Roadmap: Learn → Build → Lead → Create → Scale
            </h3>
            <span className="text-xs font-mono text-slate-500">HORIZON 2026—2032</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {ENTREPRENEURSHIP_DATA.roadmapSteps.map((step, idx) => {
              const isFirst = idx === 0;
              const isSecond = idx === 1;
              const isThird = idx === 2;

              return (
                <div
                  key={step.step}
                  className={`p-5 rounded-xl border relative flex flex-col justify-between transition-all duration-300 ${
                    isFirst || isSecond || isThird
                      ? 'bg-slate-900/80 border-cyan-500/40 shadow-[0_0_20px_rgba(0,240,255,0.1)]'
                      : 'bg-slate-950/80 border-slate-800'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-2xl font-black text-cyan-400/80">
                        {step.step}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        isFirst || isSecond
                          ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
                          : isThird
                          ? 'bg-purple-950 text-purple-300 border border-purple-500/40'
                          : 'bg-slate-900 text-slate-400'
                      }`}>
                        {idx <= 1 ? 'ACTIVE' : idx === 2 ? 'CURRENT' : 'FUTURE'}
                      </span>
                    </div>

                    <h4 className="text-lg font-display font-bold text-white mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs font-mono text-cyan-300/80 mb-2">
                      {step.subtitle}
                    </p>
                    <p className="text-xs text-slate-400 font-sans leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span>PHASE_{step.step}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
