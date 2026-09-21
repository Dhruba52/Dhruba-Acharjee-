import React, { useState } from 'react';
import { 
  Trophy, 
  Terminal, 
  Bot, 
  Code2, 
  Sparkles, 
  Plus, 
  ExternalLink,
  ChevronRight,
  Target
} from 'lucide-react';
import { COMPETITIONS_DATA } from '../data/portfolioData.ts';
import { playClick } from '../utils/audio.ts';

export const CompetitionsSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="competitions" className="relative py-20 bg-[#07090e] border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Trophy className="w-3.5 h-3.5 text-cyan-400" />
            <span>ARENA LOGS // BENCHMARKS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            WHERE I'VE <span className="text-cyan-400">TESTED MYSELF</span>
          </h2>
          <p className="max-w-2xl text-slate-400 font-mono text-sm sm:text-base">
            Inter-university technical showcases, autonomous robotics arenas, and competitive coding sprints.
          </p>
        </div>

        {/* Competitions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {COMPETITIONS_DATA.map((comp) => (
            <div
              key={comp.id}
              className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:bg-cyan-950/50 group-hover:border-cyan-500/40 transition-colors">
                  {comp.type.includes('Showcase') ? <Bot className="w-5 h-5" /> : <Code2 className="w-5 h-5" />}
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950/60 text-purple-300 border border-purple-500/30">
                    {comp.badge}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400">
                    {comp.year}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {comp.title}
              </h3>
              <div className="text-xs font-mono text-cyan-400 mb-3">
                {comp.event} • <span className="text-slate-400">{comp.type}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-4">
                {comp.description}
              </p>

              <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">Status:</span>
                <span className="text-emerald-400 font-semibold">{comp.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Expandable Module Notice */}
        <div className="mt-8 max-w-xl mx-auto text-center">
          <button
            onClick={() => {
              playClick();
              setExpanded(!expanded);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/30 text-xs font-mono text-slate-300 transition-all cursor-pointer"
          >
            <Plus className={`w-3.5 h-3.5 text-cyan-400 transition-transform ${expanded ? 'rotate-45' : ''}`} />
            <span>{expanded ? 'Hide Add-on Registry' : 'Upcoming Competitions Registry'}</span>
          </button>

          {expanded && (
            <div className="mt-4 p-4 rounded-xl bg-slate-950/90 border border-cyan-500/20 text-xs font-mono text-slate-400 text-left animate-in fade-in duration-200">
              <div className="text-cyan-300 font-bold mb-1.5 flex items-center gap-2">
                <Target className="w-4 h-4 text-cyan-400" />
                <span>Next Competitive Targets (2026-2027)</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                <li>National Line Follower Robot (LFR) & Maze Solver Championships</li>
                <li>Biomedical Instrumentation & IEEE Student Paper Presentation</li>
                <li>Regional Inter-University Hackathons & Smart Device Olympiads</li>
              </ul>
              <p className="mt-2 text-[11px] text-slate-500 border-t border-slate-800 pt-2">
                Editable inside <code className="text-cyan-400">COMPETITIONS_DATA</code> in <code className="text-purple-300">/src/data/portfolioData.ts</code>.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
