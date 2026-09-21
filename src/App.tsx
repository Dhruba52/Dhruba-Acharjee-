import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { JourneySection } from './components/JourneySection.tsx';
import { SkillsSection } from './components/SkillsSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { ExperienceSection } from './components/ExperienceSection.tsx';
import { CompetitionsSection } from './components/CompetitionsSection.tsx';
import { HobbiesSection } from './components/HobbiesSection.tsx';
import { AnimeEntertainmentSection } from './components/AnimeEntertainmentSection.tsx';
import { EntrepreneurshipSection } from './components/EntrepreneurshipSection.tsx';
import { CleverSapiensSection } from './components/CleverSapiensSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { TerminalModal } from './components/TerminalModal.tsx';
import { Terminal as TerminalIcon, Rotate3d, X } from 'lucide-react';
import { playClick } from './utils/audio.ts';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [spatial3DActive, setSpatial3DActive] = useState(false);

  // Track active section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'journey',
        'skills',
        'projects',
        'experience',
        'competitions',
        'hobbies',
        'universe',
        'mission',
        'cleversapiens',
        'contact'
      ];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global keyboard shortcuts for Terminal Mode (~ or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === '`' || e.key === '~') && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        playClick();
        setTerminalOpen((prev) => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        playClick();
        setTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigateSection = (sectionId: string) => {
    setTerminalOpen(false);
    const el = document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleSpatial3D = () => {
    playClick();
    setSpatial3DActive((prev) => !prev);
  };

  return (
    <div className={`min-h-screen bg-[#07090e] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200 ${
      spatial3DActive ? 'spatial-3d-active' : ''
    }`}>
      
      {/* Top Navbar */}
      <Navbar 
        onOpenTerminal={() => setTerminalOpen(true)} 
        activeSection={activeSection}
        onToggleSpatial3D={handleToggleSpatial3D}
        spatial3DActive={spatial3DActive}
      />

      {/* Floating 3D Spatial Mode Indicator Banner */}
      {spatial3DActive && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40 animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/90 border border-purple-400 text-xs font-mono text-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.4)] backdrop-blur-md">
            <Rotate3d className="w-4 h-4 text-purple-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span>3D SPATIAL TILT ACTIVE — PERSPECTIVE 2200PX</span>
            <button
              onClick={handleToggleSpatial3D}
              className="ml-2 hover:text-white transition-colors cursor-pointer"
              title="Reset 2D view"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onOpenTerminal={() => setTerminalOpen(true)}
          onToggleSpatial3D={handleToggleSpatial3D}
          spatial3DActive={spatial3DActive}
        />

        {/* 2. About Me */}
        <AboutSection />

        {/* 3. My Journey */}
        <JourneySection />

        {/* 4. Skills Matrix */}
        <SkillsSection />

        {/* 5. Projects Lab with 3D Carousel */}
        <ProjectsSection />

        {/* 6. Experience & Leadership */}
        <ExperienceSection />

        {/* 7. Competitions & Activities */}
        <CompetitionsSection />

        {/* 8. Hobbies & Sports */}
        <HobbiesSection />

        {/* 9. Anime & Entertainment Quadrant */}
        <AnimeEntertainmentSection />

        {/* 10. Entrepreneurship - The Bigger Mission */}
        <EntrepreneurshipSection />

        {/* 11. Clever Sapiens Dedicated Showcase */}
        <CleverSapiensSection />

        {/* 12. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Controls */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        {/* 3D Spatial Toggle Button */}
        <button
          onClick={handleToggleSpatial3D}
          className={`flex items-center gap-1.5 px-3 py-2.5 rounded-full border shadow-lg backdrop-blur-md text-xs font-mono transition-all cursor-pointer ${
            spatial3DActive
              ? 'bg-purple-900/90 text-purple-200 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.35)]'
              : 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 border-slate-700 hover:border-cyan-400'
          }`}
          title="Toggle 3D spatial tilt"
        >
          <Rotate3d className="w-4 h-4 text-cyan-400" />
          <span className="hidden sm:inline font-bold">{spatial3DActive ? '3D ON' : '3D MODE'}</span>
        </button>

        {/* Terminal Quick-Trigger Button */}
        <button
          onClick={() => {
            playClick();
            setTerminalOpen(true);
          }}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-cyan-300 hover:text-cyan-200 border border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.25)] backdrop-blur-md text-xs font-mono transition-all group cursor-pointer"
          title="Open interactive terminal (~ or Ctrl+K)"
        >
          <TerminalIcon className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline font-bold">CLI MODE</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
            ~
          </span>
        </button>
      </div>

      {/* Interactive Cyber Terminal Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onNavigateSection={handleNavigateSection}
      />
    </div>
  );
}
