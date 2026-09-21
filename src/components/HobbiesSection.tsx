import React, { useState } from 'react';
import { Gamepad2, Sparkles, Trophy, ChevronRight, Activity, Brain } from 'lucide-react';
import { HOBBIES_DATA } from '../data/portfolioData.ts';
import { playClick } from '../utils/audio.ts';

export const HobbiesSection: React.FC = () => {
  const [activeHobby, setActiveHobby] = useState<string>(HOBBIES_DATA[0].id);

  return (
    <section id="hobbies" className="relative py-20 bg-[#080b12] border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Gamepad2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>RECREATIONAL & STRATEGIC EQUILIBRIUM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            WHEN I'M NOT <span className="text-cyan-400">CODING...</span>
          </h2>
          <p className="max-w-2xl text-slate-400 font-mono text-sm sm:text-base">
            Sharpening tactical calculation, spatial reflexes, and probabilistic thinking beyond circuits.
          </p>
        </div>

        {/* Hobbies Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOBBIES_DATA.map((hobby) => {
            const isActive = activeHobby === hobby.id;

            return (
              <div
                key={hobby.id}
                onClick={() => {
                  playClick();
                  setActiveHobby(hobby.id);
                }}
                className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 relative group cursor-pointer overflow-hidden ${
                  isActive
                    ? 'bg-slate-900 border border-cyan-500/50 shadow-[0_0_30px_rgba(0,240,255,0.15)] scale-[1.02]'
                    : 'bg-slate-950/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                {/* Corner highlight */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-3xl transition-opacity ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`} />

                {/* Big Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl sm:text-5xl select-none filter drop-shadow-[0_0_12px_rgba(0,240,255,0.3)]">
                    {hobby.icon}
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                    {hobby.category}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {hobby.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-5">
                  {hobby.description}
                </p>

                {/* Tactical attributes */}
                <div className="space-y-2 pt-4 border-t border-slate-800">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1">
                    <Brain className="w-3 h-3 text-cyan-400" />
                    <span>Cognitive & Reflexive Drivers</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {hobby.tactics.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 text-[11px] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sub status */}
                <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-cyan-500/70">
                  <span>STRATEGY ACTIVE</span>
                  <span>{isActive ? '● IN FOCUS' : '○ CLICK TO FOCUS'}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
