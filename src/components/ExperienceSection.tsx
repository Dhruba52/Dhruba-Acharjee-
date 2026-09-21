import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Bot, 
  Sparkles, 
  HeartHandshake, 
  BookOpen, 
  Calendar,
  CheckCircle2,
  Users,
  Compass
} from 'lucide-react';
import { EXPERIENCE_ROLES } from '../data/portfolioData.ts';
import { playClick } from '../utils/audio.ts';

export const ExperienceSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const getRoleIcon = (type: string) => {
    switch (type) {
      case 'Leadership': return GraduationCap;
      case 'Club': return Bot;
      case 'Initiative': return Sparkles;
      case 'Volunteering': return HeartHandshake;
      case 'Academic': return BookOpen;
      default: return Users;
    }
  };

  const filteredRoles = EXPERIENCE_ROLES.filter((role) => {
    if (activeFilter === 'All') return true;
    return role.type === activeFilter;
  });

  return (
    <section id="experience" className="relative py-24 bg-[#080b12] border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>ORGANIZATIONAL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            BEYOND THE <span className="text-cyan-400">CLASSROOM</span>
          </h2>
          <p className="max-w-2xl text-slate-400 font-mono text-sm sm:text-base">
            Class representative leadership, robotics club governance, community environmental service, and educational mentoring.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {['All', 'Leadership', 'Club', 'Initiative', 'Volunteering', 'Academic'].map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  playClick();
                  setActiveFilter(filter);
                }}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-cyan-950 text-cyan-300 border border-cyan-400/50 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoles.map((role) => {
            const Icon = getRoleIcon(role.type);

            return (
              <div
                key={role.id}
                className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 relative group flex flex-col justify-between hover:shadow-[0_0_25px_rgba(0,240,255,0.08)]"
              >
                <div>
                  {/* Top metadata */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40 group-hover:bg-cyan-950/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                      {role.badge || role.type}
                    </span>
                  </div>

                  {/* Title and Org */}
                  <h3 className="text-lg font-display font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {role.role}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400/90 mb-2">
                    {role.organization}
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{role.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                    {role.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 mb-4">
                    {role.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/80 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-status */}
                <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>ROLE_ID: {role.id}</span>
                  <span className="text-purple-400">LOGGED & VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
