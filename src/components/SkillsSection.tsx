import React, { useState, useMemo } from 'react';
import { 
  Cpu, 
  Terminal, 
  Layers, 
  Sparkles, 
  Search, 
  SlidersHorizontal,
  Zap,
  Code2,
  Palette,
  Users,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData.ts';
import { SkillCategory, SkillLevel } from '../types.ts';
import { playClick } from '../utils/audio.ts';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'All'>('All');
  const [activeLevel, setActiveLevel] = useState<SkillLevel | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: (SkillCategory | 'All')[] = ['All', 'Engineering', 'Technology', 'Creative', 'Management'];
  const levels: (SkillLevel | 'All')[] = ['All', 'Building', 'Practicing', 'Learning', 'Exploring'];

  const getCategoryIcon = (cat: SkillCategory) => {
    switch (cat) {
      case 'Engineering': return Cpu;
      case 'Technology': return Code2;
      case 'Creative': return Palette;
      case 'Management': return Users;
      default: return Sparkles;
    }
  };

  const getLevelColor = (lvl: SkillLevel) => {
    switch (lvl) {
      case 'Building':
        return {
          badge: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/50 shadow-[0_0_10px_rgba(0,240,255,0.2)]',
          dot: 'bg-cyan-400',
          desc: 'High active capability & hands-on application'
        };
      case 'Practicing':
        return {
          badge: 'bg-purple-950/80 text-purple-300 border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.2)]',
          dot: 'bg-purple-400',
          desc: 'Regularly deployed in projects & workflows'
        };
      case 'Learning':
        return {
          badge: 'bg-blue-950/80 text-blue-300 border-blue-500/50',
          dot: 'bg-blue-400',
          desc: 'Active study & conceptual synthesis'
        };
      case 'Exploring':
        return {
          badge: 'bg-slate-900 text-slate-300 border-slate-700',
          dot: 'bg-slate-400',
          desc: 'Foundational investigations & prototyping'
        };
    }
  };

  const filteredSkills = useMemo(() => {
    return SKILLS_DATA.filter((skill) => {
      const matchCategory = activeCategory === 'All' || skill.category === activeCategory;
      const matchLevel = activeLevel === 'All' || skill.level === activeLevel;
      const matchQuery = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchLevel && matchQuery;
    });
  }, [activeCategory, activeLevel, searchQuery]);

  return (
    <section id="skills" className="relative py-24 bg-[#080b12] border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>CAPABILITY ARRAY // SKILL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            THE <span className="text-cyan-400">SKILL MATRIX</span>
          </h2>
          <p className="max-w-2xl text-slate-400 font-mono text-sm sm:text-base">
            Qualitative, honest skill proficiency mapped across Engineering, Technology, Creative Media, and Management.
          </p>

          {/* Descriptive Level Legend */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {(['Building', 'Practicing', 'Learning', 'Exploring'] as SkillLevel[]).map((lvl) => {
              const meta = getLevelColor(lvl);
              return (
                <div key={lvl} className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-mono border ${meta.badge}`}>
                  <span className={`w-2 h-2 rounded-full ${meta.dot}`} />
                  <span className="font-semibold">{lvl}</span>
                  <span className="hidden md:inline text-[10px] text-slate-400">({meta.desc})</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls Bar: Category Tabs & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 p-4 rounded-xl bg-slate-950/90 border border-slate-800">
          
          {/* Category Switchers */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playClick();
                  setActiveCategory(cat);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills, tools, domains..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40"
            />
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => {
            const Icon = getCategoryIcon(skill.category);
            const levelInfo = getLevelColor(skill.level);

            return (
              <div
                key={skill.id}
                className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 relative group overflow-hidden hover:shadow-[0_0_20px_rgba(0,240,255,0.08)]"
              >
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      {skill.category}
                    </span>
                  </div>

                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${levelInfo.badge}`}>
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {skill.description}
                </p>

                {/* Sub-card decorative telemetry */}
                <div className="mt-3 pt-2.5 border-t border-slate-900 flex items-center justify-between text-[10px] font-mono text-slate-600">
                  <span>ID: {skill.id}</span>
                  <span className="text-cyan-500/70 group-hover:text-cyan-400">NODE_STATUS: VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-500 font-mono text-sm">
            No skill matches found for query "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
};
