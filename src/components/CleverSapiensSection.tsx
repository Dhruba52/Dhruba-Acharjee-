import React, { useState } from 'react';
import { 
  Sparkles, 
  Cpu, 
  Video, 
  Lightbulb, 
  Users, 
  Share2, 
  ArrowRight, 
  Layers, 
  Plus, 
  CheckCircle2,
  ExternalLink,
  Bot
} from 'lucide-react';
import { CLEVER_SAPIENS_DATA } from '../data/portfolioData.ts';
import { playClick } from '../utils/audio.ts';

export const CleverSapiensSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'incubator' | 'team'>('overview');

  return (
    <section id="cleversapiens" className="relative py-24 bg-[#07090e] border-t border-slate-900 overflow-hidden">
      {/* Circuit background */}
      <div className="absolute inset-0 circuit-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/40 text-xs font-mono text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>FOUNDER — PERSONAL GROUP & INCUBATOR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            CLEVER <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">SAPIENS</span>
          </h2>
          <p className="text-cyan-300 font-mono text-sm sm:text-base font-semibold">
            {CLEVER_SAPIENS_DATA.motto}
          </p>
          <p className="max-w-2xl text-slate-400 font-sans text-xs sm:text-sm">
            The creative and technological mothership for experimental robotics, scientific LaTeX publishing, digital video assets, and future venture incubation.
          </p>
        </div>

        {/* Narrative & Three Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          
          {/* Main Manifesto */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-950/90 border border-purple-500/30 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
            
            <h3 className="text-xl font-display font-bold text-white mb-3 flex items-center gap-2">
              <Bot className="w-5 h-5 text-purple-400" />
              <span>Personal Initiative & Project Identity</span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              {CLEVER_SAPIENS_DATA.about}
            </p>

            <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs font-mono text-purple-300">
              <span className="font-bold">STATUS:</span> {CLEVER_SAPIENS_DATA.status}
            </div>
          </div>

          {/* Core Pillars */}
          <div className="lg:col-span-6 space-y-3">
            {CLEVER_SAPIENS_DATA.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-mono text-xs font-bold text-cyan-400">0{idx + 1}</span>
                  <h4 className="text-base font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Dynamic Expandable Showcase: Future Projects, Team & Media */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/90 border border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
            <div>
              <h4 className="text-lg font-display font-bold text-white">
                Clever Sapiens Registry
              </h4>
              <p className="text-xs font-mono text-slate-400">
                Modular structure ready for future projects, team collaborators, videos & achievements
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  playClick();
                  setActiveTab('overview');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-purple-950 text-purple-300 border border-purple-500/40'
                    : 'text-slate-400 hover:bg-slate-900'
                }`}
              >
                Incubation Sandbox
              </button>
              <button
                onClick={() => {
                  playClick();
                  setActiveTab('incubator');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono cursor-pointer ${
                  activeTab === 'incubator'
                    ? 'bg-purple-950 text-purple-300 border border-purple-500/40'
                    : 'text-slate-400 hover:bg-slate-900'
                }`}
              >
                Future Ideas
              </button>
              <button
                onClick={() => {
                  playClick();
                  setActiveTab('team');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono cursor-pointer ${
                  activeTab === 'team'
                    ? 'bg-purple-950 text-purple-300 border border-purple-500/40'
                    : 'text-slate-400 hover:bg-slate-900'
                }`}
              >
                Collaborator Network
              </button>
            </div>
          </div>

          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-mono text-cyan-400 mb-1">MEDIA CHANNEL</div>
                <div className="text-sm font-bold text-white mb-2">Technical Video Showcases</div>
                <p className="text-xs text-slate-400 mb-3">Producing dynamic engineering breakdowns, robotics trials, and digital design tutorials.</p>
                <span className="text-[10px] font-mono text-slate-500">Ready for YouTube integration</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-mono text-purple-400 mb-1">PUBLICATIONS</div>
                <div className="text-sm font-bold text-white mb-2">LaTeX Scientific Repositories</div>
                <p className="text-xs text-slate-400 mb-3">Documenting circuit schematics, simulation benchmark logs, and mathematical analyses.</p>
                <span className="text-[10px] font-mono text-slate-500">Open-source documentation</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-mono text-emerald-400 mb-1">PROTOTYPING</div>
                <div className="text-sm font-bold text-white mb-2">Robotics & Sensor Testbed</div>
                <p className="text-xs text-slate-400 mb-3">Field testing fire-fighting rovers, distance tracking algorithms, and bio-amplifiers.</p>
                <span className="text-[10px] font-mono text-slate-500">JSTU Campus test ground</span>
              </div>
            </div>
          )}

          {activeTab === 'incubator' && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-cyan-400">IDEA_01 //</span>
                  <span className="text-sm font-bold text-white ml-2">Low-Cost Autonomous Agricultural Inspection Rover</span>
                </div>
                <span className="text-xs font-mono text-purple-400">Concept Stage</span>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-cyan-400">IDEA_02 //</span>
                  <span className="text-sm font-bold text-white ml-2">Portable Telemedicine ECG & Vital Signs Hub</span>
                </div>
                <span className="text-xs font-mono text-purple-400">Research Stage</span>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-cyan-400">IDEA_03 //</span>
                  <span className="text-sm font-bold text-white ml-2">Student Engineering Project Collaboration SaaS</span>
                </div>
                <span className="text-xs font-mono text-purple-400">Ideation</span>
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 text-center space-y-3">
              <Users className="w-8 h-8 text-cyan-400 mx-auto" />
              <h5 className="text-base font-display font-bold text-white">
                Interested in building with Clever Sapiens?
              </h5>
              <p className="max-w-md mx-auto text-xs text-slate-400">
                Open to collaboration with passionate coders, robotics enthusiasts, UI designers, and creative videographers.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-500/40 text-xs font-mono hover:bg-cyan-900 transition-colors"
              >
                <span>Initiate Contact</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
