import React, { useState } from 'react';
import { 
  Sparkles, 
  Film, 
  Clapperboard, 
  Smile, 
  Tv, 
  Flame, 
  ShieldAlert, 
  Sword, 
  Zap, 
  Moon, 
  ChevronRight,
  Eye
} from 'lucide-react';
import { ENTERTAINMENT_DATA } from '../data/portfolioData.ts';
import { playClick } from '../utils/audio.ts';

export const AnimeEntertainmentSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (categoryName: string) => {
    if (categoryName.includes('Anime')) return Sparkles;
    if (categoryName.includes('Series')) return Tv;
    if (categoryName.includes('Movies')) return Clapperboard;
    return Smile;
  };

  const getVibeColor = (vibeTag: string) => {
    if (vibeTag.includes('Grimoire') || vibeTag.includes('Will of Fire')) return 'border-orange-500/50 bg-orange-950/40 text-orange-300';
    if (vibeTag.includes('Freedom') || vibeTag.includes('Bankai')) return 'border-cyan-500/50 bg-cyan-950/40 text-cyan-300';
    if (vibeTag.includes('Shadow') || vibeTag.includes('Dragonfire')) return 'border-purple-500/50 bg-purple-950/40 text-purple-300';
    if (vibeTag.includes('Arc Reactor')) return 'border-sky-500/50 bg-sky-950/40 text-sky-300';
    if (vibeTag.includes('Innovation') || vibeTag.includes('Magic')) return 'border-emerald-500/50 bg-emerald-950/40 text-emerald-300';
    return 'border-slate-700 bg-slate-900 text-slate-300';
  };

  const currentCategory = ENTERTAINMENT_DATA[activeTab];

  return (
    <section id="universe" className="relative py-24 bg-[#07090e] border-t border-slate-900 overflow-hidden">
      {/* Abstract Neon Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/40 text-xs font-mono text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>NEO-TOKYO // CREATIVE RESONANCE MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            MY OTHER <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">UNIVERSE</span>
          </h2>
          <p className="font-mono text-sm sm:text-base text-cyan-300">
            Anime • Movies • Series • Cartoons
          </p>
          <p className="max-w-2xl text-slate-400 font-sans text-xs sm:text-sm">
            Stories of relentless grit, tactical masterminds, scientific invention, and heroic will that inspire my drive to build.
          </p>
        </div>

        {/* Dashboard Tabs Bar */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-950 border border-slate-800 backdrop-blur-md">
            {ENTERTAINMENT_DATA.map((cat, idx) => {
              const Icon = getCategoryIcon(cat.category);
              const isSelected = activeTab === idx;

              return (
                <button
                  key={cat.category}
                  onClick={() => {
                    playClick();
                    setActiveTab(idx);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-purple-950 to-slate-900 text-cyan-300 border border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.25)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span>{cat.category}</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                    {cat.items.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Grid Items Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory.items.map((item, i) => {
            const vibeStyle = getVibeColor(item.vibeTag);

            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-purple-500/50 transition-all duration-300 relative group flex flex-col justify-between overflow-hidden hover:shadow-[0_0_25px_rgba(168,85,247,0.12)]"
              >
                {/* Abstract Neon Silhouette Circuit Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 via-transparent to-transparent pointer-events-none" />
                
                <div>
                  {/* Top metadata */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-slate-500">
                      INDEX #{String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${vibeStyle}`}>
                      {item.vibeTag}
                    </span>
                  </div>

                  {/* Title & Genre */}
                  <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400/90 mb-3">
                    {item.genre}
                  </div>

                  {/* Narrative note */}
                  {item.note && (
                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-4">
                      {item.note}
                    </p>
                  )}

                  {/* Favorite Aspect */}
                  {item.favoriteAspect && (
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 space-y-1">
                      <div className="text-[10px] font-mono text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3" />
                        <span>Resonating Philosophy</span>
                      </div>
                      <p className="text-xs text-slate-300 italic">
                        "{item.favoriteAspect}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Sub status */}
                <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>CANON_STATUS: FAVORITE</span>
                  <span className="text-cyan-400/80">RESONANCE 100%</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
