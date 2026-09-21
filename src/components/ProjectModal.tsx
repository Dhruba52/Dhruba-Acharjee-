import React from 'react';
import { 
  X, 
  Cpu, 
  ExternalLink, 
  Github, 
  FileText, 
  Video, 
  CheckCircle2, 
  Layers, 
  Calendar,
  Sparkles,
  CircuitBoard
} from 'lucide-react';
import { ProjectItem } from '../types.ts';
import { playClick } from '../utils/audio.ts';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0a0e17] border border-cyan-500/40 shadow-[0_0_50px_rgba(0,240,255,0.2)] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Corner Cyber Brackets */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-400" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-400" />

        {/* Close Button */}
        <button
          onClick={() => {
            playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded bg-cyan-950/90 border border-cyan-500/40 text-xs font-mono text-cyan-300">
            PROJECT {project.projectNumber}
          </span>
          <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
            {project.category}
          </span>
          <span className={`px-2.5 py-0.5 rounded text-xs font-mono border ${
            project.status === 'Simulation' 
              ? 'bg-purple-950/80 border-purple-500/50 text-purple-300' 
              : 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300'
          }`}>
            {project.status === 'Simulation' ? 'SIMULATION PROJECT' : project.status.toUpperCase()}
          </span>
          {project.date && (
            <span className="flex items-center gap-1 text-xs font-mono text-slate-500 ml-auto mr-10">
              <Calendar className="w-3.5 h-3.5" />
              {project.date}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
          {project.title}
        </h2>
        <p className="text-sm font-mono text-cyan-400/90 mb-6">
          {project.tagline}
        </p>

        {/* Schematic / Virtual Blueprint Box */}
        <div className="mb-6 p-4 rounded-xl bg-slate-950/90 border border-cyan-500/20 relative overflow-hidden">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-900 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-cyan-300">
              <CircuitBoard className="w-4 h-4" />
              System Architecture & Circuit Schematic
            </span>
            <span className="text-[10px] text-slate-500">REV 1.0</span>
          </div>
          <p className="text-xs font-mono text-slate-300 leading-relaxed">
            {project.schematicDetails || 'Embedded microcontroller architecture configured with custom sensor arrays and actuator relays.'}
          </p>
        </div>

        {/* Detailed Description */}
        <div className="space-y-4 mb-6 text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
          <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            Project Overview & Implementation
          </h3>
          <p>{project.detailedOverview}</p>
        </div>

        {/* Highlights */}
        <div className="mb-6 space-y-2.5">
          <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            Key Technical Innovations & Engineering Highlights
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950/60 border border-slate-900">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 font-sans">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies List */}
        <div className="mb-6">
          <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            Hardware & Software Components
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span 
                key={tech}
                className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links (GitHub, Video, Documentation placeholders) */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
          <div className="text-xs font-mono text-slate-500 mr-auto">
            Ready for future link expansion (GitHub, Video Demo, PDF Docs)
          </div>
          <button
            onClick={() => {
              playClick();
              alert(`Ready for your link: Configure GitHub repo URL for "${project.title}" in portfolioData.ts!`);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub (Config)</span>
          </button>
          <button
            onClick={() => {
              playClick();
              alert(`Ready for your link: Add documentation link or Tinkercad simulation URL in portfolioData.ts!`);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-xs font-mono text-cyan-300 transition-colors cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Project Specs</span>
          </button>
        </div>

      </div>
    </div>
  );
};
