import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Cpu, 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  Sparkles,
  ChevronRight,
  Rotate3d
} from 'lucide-react';
import { toggleAudio, isAudioEnabled, playClick } from '../utils/audio.ts';

interface NavbarProps {
  onOpenTerminal: () => void;
  activeSection: string;
  onToggleSpatial3D?: () => void;
  spatial3DActive?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenTerminal, 
  activeSection,
  onToggleSpatial3D,
  spatial3DActive = false
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const nextState = toggleAudio();
    setSoundOn(nextState);
    if (nextState) playClick();
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Universe', href: '#universe' },
    { name: 'Mission', href: '#mission' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#07090e]/95 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a 
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="group flex items-center gap-3 cursor-pointer"
        >
          <div className="relative w-9 h-9 rounded-lg bg-slate-900 border border-cyan-500/40 flex items-center justify-center overflow-hidden group-hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20" />
            <Cpu className="w-5 h-5 text-cyan-400 group-hover:rotate-180 transition-transform duration-700" />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-lg text-white tracking-wider group-hover:text-cyan-400 transition-colors">
                DHRUBA<span className="text-cyan-400">.EXE</span>
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                3D STATIC
              </span>
            </div>
            <p className="text-[11px] font-mono text-slate-400 group-hover:text-slate-300">
              Engineer in Progress
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-950/70 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-1.5 text-xs font-mono rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* 3D Spatial Mode Button */}
          {onToggleSpatial3D && (
            <button
              id="nav-spatial-3d-btn"
              onClick={() => {
                playClick();
                onToggleSpatial3D();
              }}
              title={spatial3DActive ? 'Disable 3D Spatial Tilt' : 'Enable 3D Spatial Tilt'}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                spatial3DActive
                  ? 'bg-purple-950 text-purple-300 border border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.35)]'
                  : 'bg-slate-900/80 text-slate-400 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40'
              }`}
            >
              <Rotate3d className={`w-3.5 h-3.5 ${spatial3DActive ? 'text-purple-400 animate-spin' : 'text-cyan-400'}`} />
              <span className="hidden md:inline">{spatial3DActive ? '3D ACTIVE' : '3D MODE'}</span>
            </button>
          )}

          {/* Sound Toggle */}
          <button
            id="nav-audio-toggle"
            onClick={handleSoundToggle}
            aria-label="Toggle sound feedback"
            title={soundOn ? 'Mute sound effects' : 'Enable cyber sound effects'}
            className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors cursor-pointer"
          >
            {soundOn ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Terminal Mode Trigger */}
          <button
            id="nav-terminal-btn"
            onClick={() => {
              playClick();
              onOpenTerminal();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 text-xs font-mono transition-all shadow-[0_0_12px_rgba(0,240,255,0.15)] group cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">TERMINAL</span>
            <span className="text-[10px] px-1 py-0.2 rounded bg-cyan-900/60 text-cyan-200 border border-cyan-500/20">~</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            id="nav-mobile-toggle"
            onClick={() => {
              playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle mobile menu"
            className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0d14]/98 border-b border-cyan-500/20 px-6 py-6 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2 mb-4">
            <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest px-2 mb-1">
              Navigation Matrix
            </div>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center justify-between p-2.5 rounded-lg text-left text-sm font-mono text-slate-300 hover:text-cyan-300 hover:bg-slate-900/80 border border-transparent hover:border-cyan-500/30 cursor-pointer"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-cyan-400 opacity-60" />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
            {onToggleSpatial3D && (
              <button
                onClick={() => {
                  onToggleSpatial3D();
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border ${
                  spatial3DActive
                    ? 'bg-purple-950 text-purple-300 border-purple-400'
                    : 'bg-slate-900 text-slate-300 border-slate-800'
                }`}
              >
                <Rotate3d className="w-3.5 h-3.5 text-cyan-400" />
                <span>{spatial3DActive ? '3D Active' : 'Enable 3D'}</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 text-xs font-mono cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5" />
              Launch Terminal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
