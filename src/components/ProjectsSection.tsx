import React, { useState } from 'react';
import { 
  Layers, 
  ArrowUpRight, 
  Cpu, 
  Flame, 
  Activity, 
  Home, 
  Bot, 
  Sparkles, 
  Rotate3d,
  ChevronLeft,
  ChevronRight,
  LayoutGrid
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData.ts';
import { ProjectItem } from '../types.ts';
import { ProjectModal } from './ProjectModal.tsx';
import { playClick } from '../utils/audio.ts';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'3d-carousel' | 'grid'>('3d-carousel');
  const [carouselAngle, setCarouselAngle] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'fire-fighting-robot': return Flame;
      case 'ecg-machine': return Activity;
      case 'home-automation': return Home;
      case 'human-following-robot': return Bot;
      default: return Cpu;
    }
  };

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'Robotics') return p.category === 'Robotics';
    if (filter === 'Biomedical') return p.category.includes('Biomedical');
    if (filter === 'Simulation') return p.status === 'Simulation';
    return true;
  });

  const rotateCarousel = (direction: 'next' | 'prev') => {
    playClick();
    const count = PROJECTS_DATA.length;
    const step = 360 / count;
    if (direction === 'next') {
      setCarouselAngle((prev) => prev - step);
      setActiveProjectIndex((prev) => (prev + 1) % count);
    } else {
      setCarouselAngle((prev) => prev + step);
      setActiveProjectIndex((prev) => (prev - 1 + count) % count);
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-[#07090e] border-t border-slate-900 overflow-hidden preserve-3d">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>3D HARDWARE & PROTOTYPES LAB</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            THINGS I'VE <span className="text-cyan-400">BUILT</span>
          </h2>
          <p className="max-w-2xl text-slate-400 font-mono text-sm sm:text-base">
            From autonomous fire-extinguishing rovers to bio-potential ECG machines and architectural simulations.
          </p>

          {/* View Mode & Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            {/* 3D vs Grid View Switcher */}
            <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-950 border border-slate-800">
              <button
                onClick={() => {
                  playClick();
                  setViewMode('3d-carousel');
                }}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono transition-all cursor-pointer ${
                  viewMode === '3d-carousel'
                    ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Rotate3d className="w-3.5 h-3.5 text-cyan-400" />
                <span>3D STAGE</span>
              </button>

              <button
                onClick={() => {
                  playClick();
                  setViewMode('grid');
                }}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-purple-950 text-purple-300 border border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.2)]'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5 text-purple-400" />
                <span>GRID MATRIX</span>
              </button>
            </div>

            {/* Category Filter Pills (in Grid mode) */}
            {viewMode === 'grid' && (
              <div className="flex items-center gap-1.5">
                {['All', 'Robotics', 'Biomedical', 'Simulation'].map((f) => (
                  <button
                    key={f}
                    onClick={() => {
                      playClick();
                      setFilter(f);
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                      filter === f
                        ? 'bg-cyan-950 text-cyan-300 border border-cyan-400/50 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 3D CAROUSEL STAGE MODE */}
        {viewMode === '3d-carousel' && (
          <div className="relative py-12 flex flex-col items-center">
            
            {/* 3D Stage Navigation Controls */}
            <div className="flex items-center justify-between w-full max-w-xl mb-6 px-4 z-20">
              <button
                onClick={() => rotateCarousel('prev')}
                aria-label="Previous 3D project"
                className="flex items-center gap-1 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/60 text-xs font-mono transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)] cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>ROTATE PREV</span>
              </button>

              <div className="text-center font-mono text-xs text-slate-400">
                <span className="text-cyan-400 font-bold">PROJECT {activeProjectIndex + 1}</span> / {PROJECTS_DATA.length}
              </div>

              <button
                onClick={() => rotateCarousel('next')}
                aria-label="Next 3D project"
                className="flex items-center gap-1 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/60 text-xs font-mono transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)] cursor-pointer"
              >
                <span>ROTATE NEXT</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* 3D Cylindrical Ring Viewport */}
            <div className="carousel-3d-viewport h-[460px] sm:h-[480px] flex items-center justify-center">
              <div 
                className="carousel-3d-ring w-80 sm:w-96 h-[400px]"
                style={{
                  transform: `rotateY(${carouselAngle}deg)`
                }}
              >
                {PROJECTS_DATA.map((project, index) => {
                  const angle = (360 / PROJECTS_DATA.length) * index;
                  const IconComponent = getProjectIcon(project.id);
                  const isSimulation = project.status === 'Simulation';

                  return (
                    <div
                      key={project.id}
                      className="absolute inset-0 p-6 sm:p-7 rounded-2xl bg-slate-950/95 border border-cyan-500/40 shadow-[0_0_40px_rgba(0,240,255,0.2)] flex flex-col justify-between backdrop-blur-xl backface-hidden"
                      style={{
                        transform: `rotateY(${angle}deg) translateZ(280px)`
                      }}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xl font-black text-cyan-400">
                              {project.projectNumber}
                            </span>
                            <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                              {project.category}
                            </span>
                          </div>

                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                            isSimulation
                              ? 'bg-purple-950 text-purple-300 border-purple-500/50'
                              : 'bg-emerald-950 text-emerald-300 border-emerald-500/50'
                          }`}>
                            {project.status}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 shrink-0">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-display font-bold text-white leading-tight">
                              {project.title}
                            </h3>
                            <p className="text-[11px] font-mono text-slate-400">
                              {project.tagline}
                            </p>
                          </div>
                        </div>

                        <p className="text-xs text-slate-300 line-clamp-3 mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 text-[10px] font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-900 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-slate-500">
                          3D_STAGE // CYLINDER
                        </span>

                        <button
                          onClick={() => {
                            playClick();
                            setSelectedProject(project);
                          }}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-mono font-bold text-xs hover:bg-cyan-400 transition-all shadow-[0_0_12px_rgba(0,240,255,0.3)] cursor-pointer"
                        >
                          <span>Full Specs</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick 3D Selector Dots */}
            <div className="flex items-center gap-2 mt-4">
              {PROJECTS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    playClick();
                    const step = 360 / PROJECTS_DATA.length;
                    setCarouselAngle(-step * idx);
                    setActiveProjectIndex(idx);
                  }}
                  aria-label={`Jump to 3D project ${idx + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    activeProjectIndex === idx
                      ? 'w-6 bg-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.6)]'
                      : 'bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

          </div>
        )}

        {/* 3D TILT GRID MODE */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredProjects.map((project) => {
              const IconComponent = getProjectIcon(project.id);
              const isSimulation = project.status === 'Simulation';

              return (
                <div
                  key={project.id}
                  className="tilt-card-3d group p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300 relative flex flex-col justify-between overflow-hidden hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]"
                >
                  {/* Subtle top indicator */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent group-hover:via-cyan-400 transition-all" />

                  <div>
                    {/* Top Bar: Number, Category, Status */}
                    <div className="flex items-center justify-between gap-2 mb-4 card-elevate-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-2xl font-black text-slate-700 group-hover:text-cyan-500/60 transition-colors">
                          {project.projectNumber}
                        </span>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                          {project.category}
                        </span>
                      </div>

                      {/* Status badge */}
                      <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono border ${
                        isSimulation
                          ? 'bg-purple-950/80 text-purple-300 border-purple-500/50'
                          : 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50'
                      }`}>
                        {isSimulation ? 'Simulation Project' : project.status}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-3 card-elevate-2">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40 group-hover:bg-cyan-950/40 transition-all shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-slate-400 mt-0.5">
                          {project.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-sm text-slate-300 font-sans leading-relaxed mb-5 card-elevate-1">
                      {project.description}
                    </p>

                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6 card-elevate-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-slate-900/90 text-slate-400 border border-slate-800/80 text-[11px] font-mono group-hover:border-slate-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="pt-4 border-t border-slate-900 flex items-center justify-between card-elevate-2">
                    <div className="text-[11px] font-mono text-slate-500">
                      STATUS: VERIFIED
                    </div>

                    <button
                      onClick={() => {
                        playClick();
                        setSelectedProject(project);
                      }}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 text-xs font-mono transition-all shadow-[0_0_10px_rgba(0,240,255,0.1)] group/btn cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Easily Editable Notice for Dhruba */}
        <div className="mt-12 p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
          <p className="text-xs font-mono text-slate-400">
            💡 <strong className="text-cyan-400">3D Static Architecture:</strong> Add upcoming hardware prototypes, CAD schematics, or GitHub repositories directly into the static project list at <code className="text-purple-300">/src/data/portfolioData.ts</code>.
          </p>
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
