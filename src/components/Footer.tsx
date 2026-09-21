import React from 'react';
import { Cpu, Terminal, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { playClick } from '../utils/audio.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040609] border-t border-cyan-500/20 py-12 overflow-hidden text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand Identity */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-display font-extrabold text-xl text-white tracking-wider">
                DHRUBA<span className="text-cyan-400">.EXE</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 text-[10px] border border-cyan-500/30">
                PROD
              </span>
            </div>
            <div className="text-cyan-300 font-semibold text-sm font-display">
              {PERSONAL_INFO.title}
            </div>
            <div className="text-slate-500 text-xs">
              {PERSONAL_INFO.alternativeTagline}
            </div>
          </div>

          {/* Terminal-Style Status Box */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-left space-y-1 max-w-sm w-full">
            <div className="flex items-center justify-between text-[11px] pb-1 border-b border-slate-900">
              <span className="text-slate-500 flex items-center gap-1">
                <Terminal className="w-3 h-3 text-cyan-400" />
                terminal_status.log
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <div className="text-emerald-400 text-[11px] flex items-center gap-1.5">
              <span>&gt; System Status:</span>
              <span className="font-bold">ONLINE</span>
            </div>
            <div className="text-cyan-400 text-[11px] flex items-center gap-1.5">
              <span>&gt; Current Mission:</span>
              <span className="font-bold">KEEP BUILDING</span>
            </div>
          </div>

          {/* Scroll to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all cursor-pointer shadow-[0_0_12px_rgba(0,0,0,0.5)]"
            >
              <ArrowUp className="w-4 h-4 text-cyan-400" />
              <span>RETURN_TO_SUMMIT</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright & notes */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Dhruba Acharjee. All systems active.
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with modern engineering rigor</span>
            <span className="text-cyan-400 mx-1">•</span>
            <span>Jamalpur Science & Technology University</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
