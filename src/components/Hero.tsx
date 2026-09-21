import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  ChevronDown,
  Rotate3d,
  Box,
  Flame
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { CyberAvatar } from './CyberAvatar.tsx';
import { playClick } from '../utils/audio.ts';

interface HeroProps {
  onOpenTerminal: () => void;
  onToggleSpatial3D?: () => void;
  spatial3DActive?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenTerminal, 
  onToggleSpatial3D, 
  spatial3DActive = false 
}) => {
  const roles = PERSONAL_INFO.roles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Terminal boot animation states
  const terminalLines = [
    'Initializing Dhruba.exe [3D Engine Online]...',
    'Loading spatial telemetry...',
    'Calibrating robotics & bio-circuit matrix...',
    'Mounting static client architecture...',
    'Status: 3D CYBERNETIC WORKSPACE READY'
  ];
  const [visibleTerminalIndex, setVisibleTerminalIndex] = useState(0);

  // Dynamic typing effect for roles
  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  // Terminal boot line sequence
  useEffect(() => {
    if (visibleTerminalIndex < terminalLines.length) {
      const timer = setTimeout(() => {
        setVisibleTerminalIndex((prev) => prev + 1);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [visibleTerminalIndex, terminalLines.length]);

  const scrollToSection = (id: string) => {
    playClick();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center justify-center overflow-hidden cyber-grid preserve-3d"
    >
      {/* 3D Horizon Infinite Moving Grid Floor (Pure CSS 3D Plane) */}
      <div className="absolute inset-x-0 bottom-0 h-72 pointer-events-none grid-3d-stage z-0">
        <div className="grid-3d-floor" />
      </div>

      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative 3D HUD coordinate elements */}
      <div className="hidden lg:block absolute top-24 left-8 text-[11px] font-mono text-slate-500 space-y-1 select-none translate-z-20">
        <div className="flex items-center gap-1.5 text-cyan-400">
          <Rotate3d className="w-3.5 h-3.5" />
          <span>3D_STATIC_CANVAS // ACTIVE</span>
        </div>
        <div>LAT_NODE: 24.9188° N (JAMALPUR)</div>
        <div>INST_CORE: JSTU // EEE DEPT</div>
        <div>SYS_IDENT: ID_24010608</div>
      </div>
      <div className="hidden lg:block absolute top-24 right-8 text-[11px] font-mono text-slate-500 space-y-1 text-right select-none translate-z-20">
        <div>PORTFOLIO_MODE: PURE_HTML_CSS_3D</div>
        <div>ENGINE: ZERO_SERVER // STATIC_SPA</div>
        <div className="text-cyan-400">STATUS: PRODUCTION // 2026</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography, 3D Badges & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* HUD Status Tag with 3D Spatial Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-xs font-mono text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>DHRUBA.EXE // 3D STATIC WORKSPACE</span>
              <span className="text-slate-600">|</span>
              <span className="text-purple-300">Zero-Server</span>
            </div>

            {/* Main Headings */}
            <div>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white uppercase">
                DHRUBA <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">ACHARJEE</span>
              </h1>
              
              <div className="mt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <p className="text-xl sm:text-2xl font-display font-semibold text-cyan-400 tracking-wide">
                  Engineer in Progress
                </p>
                <span className="hidden sm:inline text-slate-600">/</span>
                <p className="text-sm sm:text-base font-mono text-slate-400">
                  Student → Creator → Entrepreneur
                </p>
              </div>
            </div>

            {/* Dynamic Animated Roles Line with 3D Border Glow */}
            <div className="h-10 flex items-center justify-center lg:justify-start">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/90 border border-cyan-500/30 text-sm sm:text-base font-mono text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-slate-400">{">"}</span>
                <span className="font-semibold text-slate-100">{displayedText}</span>
                <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse" />
              </div>
            </div>

            {/* Terminal-Style Boot Simulation Window */}
            <div className="max-w-xl mx-auto lg:mx-0 rounded-xl bg-slate-950/90 border border-cyan-500/30 p-4 font-mono text-xs text-slate-300 shadow-[0_8px_32px_rgba(0,0,0,0.6)] relative overflow-hidden group">
              <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-[10px] text-slate-400">spatial_runtime.sh</span>
                </div>
                <button
                  onClick={() => {
                    playClick();
                    onOpenTerminal();
                  }}
                  className="text-[10px] text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                >
                  <Terminal className="w-3 h-3" />
                  <span>Interactive Terminal</span>
                </button>
              </div>

              <div className="space-y-1">
                {terminalLines.slice(0, visibleTerminalIndex).map((line, idx) => {
                  const isLast = idx === terminalLines.length - 1;
                  return (
                    <div key={line} className="flex items-center gap-2">
                      <span className="text-cyan-500 select-none">&gt;</span>
                      <span className={isLast ? 'text-cyan-300 font-bold tracking-wider' : 'text-slate-300'}>
                        {line}
                      </span>
                      {isLast && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 inline" />}
                    </div>
                  );
                })}
                {visibleTerminalIndex < terminalLines.length && (
                  <div className="text-slate-500 animate-pulse">&gt; calibrating 3D perspective layers...</div>
                )}
              </div>
            </div>

            {/* Core Action Buttons with 3D Spatial Toggle */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                id="hero-explore-journey-btn"
                onClick={() => scrollToSection('#journey')}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-display font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore My Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-view-projects-btn"
                onClick={() => scrollToSection('#projects')}
                className="px-6 py-3 rounded-lg bg-slate-900/80 hover:bg-slate-800/90 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 font-display font-semibold text-sm tracking-wide transition-all shadow-[0_0_15px_rgba(0,240,255,0.1)] flex items-center gap-2 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>3D Projects Lab</span>
              </button>

              {onToggleSpatial3D && (
                <button
                  id="hero-toggle-3d-btn"
                  onClick={() => {
                    playClick();
                    onToggleSpatial3D();
                  }}
                  className={`px-4 py-3 rounded-lg border text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                    spatial3DActive
                      ? 'bg-purple-950 text-purple-300 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                      : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-cyan-500/40'
                  }`}
                  title="Toggle Full 3D Spatial Canvas Perspective"
                >
                  <Rotate3d className={`w-4 h-4 ${spatial3DActive ? 'text-purple-400 animate-spin' : 'text-cyan-400'}`} />
                  <span>{spatial3DActive ? '3D VIEW: ON' : '3D SPATIAL MODE'}</span>
                </button>
              )}
            </div>

            {/* Core telemetry specs bar */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-left">
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                <div className="text-[10px] font-mono text-slate-500 uppercase">Department</div>
                <div className="text-xs font-semibold text-slate-200">EEE @ JSTU</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                <div className="text-[10px] font-mono text-slate-500 uppercase">Academic Year</div>
                <div className="text-xs font-semibold text-cyan-400">2nd Yr, 2nd Sem</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                <div className="text-[10px] font-mono text-slate-500 uppercase">Student ID</div>
                <div className="text-xs font-semibold text-slate-200">24010608</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                <div className="text-[10px] font-mono text-slate-500 uppercase">Leadership</div>
                <div className="text-xs font-semibold text-purple-400">CR — EEE-05</div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Hologram Cube & Cyber Avatar Stage */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative z-20">
            <CyberAvatar />
            
            {/* Sub-avatar tagline badge */}
            <div className="mt-4 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>“I’m not finished yet. I’m building myself.”</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Down indicator */}
      <div 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer z-10" 
        onClick={() => scrollToSection('#about')}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">System Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
