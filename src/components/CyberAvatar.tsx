import React, { useState, useRef } from 'react';
import { Shield, Sparkles, Activity, Eye, Zap, Rotate3d, Box } from 'lucide-react';
import { HologramCube3D } from './HologramCube3D.tsx';
import { playClick } from '../utils/audio.ts';

export const CyberAvatar: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [viewMode, setViewMode] = useState<'avatar' | 'cube'>('avatar');
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Max 15 degree 3D rotation tilt
    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 14;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsScanning(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="flex flex-col items-center select-none">
      
      {/* 3D Mode Switcher (Avatar 3D Tilt vs. 3D Rotating Cube) */}
      <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800 mb-3 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        <button
          onClick={() => {
            playClick();
            setViewMode('avatar');
          }}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
            viewMode === 'avatar'
              ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Rotate3d className="w-3.5 h-3.5 text-cyan-400" />
          <span>3D AVATAR</span>
        </button>

        <button
          onClick={() => {
            playClick();
            setViewMode('cube');
          }}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
            viewMode === 'cube'
              ? 'bg-purple-950 text-purple-300 border border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.2)]'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Box className="w-3.5 h-3.5 text-purple-400" />
          <span>3D HOLO-CUBE</span>
        </button>
      </div>

      {viewMode === 'cube' ? (
        <HologramCube3D />
      ) : (
        <div 
          ref={cardRef}
          className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 mx-auto perspective-1000 py-2"
          onMouseEnter={() => setIsScanning(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main 3D Card with Tilt & Preserved 3D Depth */}
          <div 
            className="w-full h-full relative preserve-3d transition-transform duration-150 ease-out"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            }}
          >
            {/* Outer 3D Gyroscope Rotating Rings on X, Y, Z axes */}
            <div className="absolute inset-0 pointer-events-none preserve-3d">
              <div className="gyro-ring-x opacity-60" />
              <div className="gyro-ring-y opacity-60" />
              <div className="gyro-ring-z opacity-60" />
            </div>

            {/* Targeting Corner Brackets popping out in 3D (translateZ 30px) */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 translate-z-30 pointer-events-none" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400 translate-z-30 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-400 translate-z-30 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-400 translate-z-30 pointer-events-none" />

            {/* Holographic Glowing Backdrop Base Card */}
            <div className="absolute inset-6 rounded-2xl bg-gradient-to-b from-cyan-950/40 via-slate-950/80 to-purple-950/40 backdrop-blur-md border border-cyan-500/40 overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.2)] preserve-3d">
              
              {/* Circuit grid background inside avatar */}
              <div className="absolute inset-0 cyber-grid opacity-50" />

              {/* Dynamic Scan Line */}
              <div className={`absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity ${
                isScanning ? 'opacity-100 animate-pulse' : 'opacity-40'
              } animate-[bounce_4s_ease-in-out_infinite]`} />

              {/* Anime-inspired Futuristic Engineer Vector Silhouette - Elevated in 3D (translateZ 25px) */}
              <div className="absolute inset-0 flex items-center justify-center pt-6 translate-z-20 preserve-3d pointer-events-none">
                <svg
                  viewBox="0 0 200 220"
                  className="w-48 h-56 sm:w-56 sm:h-64 text-cyan-400 drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Engineer Holographic Headset / Cybernetic Headpiece */}
                  <circle cx="100" cy="90" r="42" fill="#0b1120" stroke="#00f0ff" strokeWidth="1.8" strokeDasharray="3 2" />
                  
                  {/* Hair / Anime Stylized Silhouette */}
                  <path
                    d="M70 75 C 65 50, 95 38, 100 42 C 105 38, 135 50, 130 75 C 138 68, 142 55, 136 48 C 130 38, 115 28, 100 28 C 85 28, 70 38, 64 48 C 58 55, 62 68, 70 75 Z"
                    fill="#1e293b"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                  />
                  {/* Spiky Anime Hair Fringe Details */}
                  <path d="M82 48 L90 62 L96 50 L104 64 L112 50 L118 60" stroke="#00f0ff" strokeWidth="1.5" strokeLinecap="round" />

                  {/* Futuristic HUD Visor / Cyber Goggles */}
                  <path
                    d="M74 84 Q 100 80 126 84 L 122 96 Q 100 93 78 96 Z"
                    fill="#06202a"
                    stroke="#00f0ff"
                    strokeWidth="2"
                  />
                  <line x1="82" y1="90" x2="118" y2="90" stroke="#00f0ff" strokeWidth="1.2" strokeDasharray="2 1" />
                  <circle cx="90" cy="90" r="2" fill="#a855f7" className="animate-ping" />
                  <circle cx="110" cy="90" r="2" fill="#00f0ff" />

                  {/* Jaw / Face outline */}
                  <path
                    d="M78 96 L82 114 L100 125 L118 114 L122 96"
                    stroke="#0ea5e9"
                    strokeWidth="1.5"
                    fill="#080e1a"
                  />

                  {/* Cyber Neck with Circuit Lines */}
                  <path d="M92 125 L92 142 M108 125 L108 142" stroke="#00f0ff" strokeWidth="1.5" />
                  <line x1="96" y1="132" x2="104" y2="132" stroke="#a855f7" strokeWidth="2" />

                  {/* High-Collar Cyberpunk Jacket / Lab Armor */}
                  <path
                    d="M50 190 L62 146 L86 142 L100 152 L114 142 L138 146 L150 190 Z"
                    fill="#09101d"
                    stroke="#00f0ff"
                    strokeWidth="1.8"
                  />
                  {/* Core Arc Reactor / EEE Power Source - Elevated */}
                  <circle cx="100" cy="172" r="14" fill="#041e24" stroke="#00f0ff" strokeWidth="1.8" />
                  <circle cx="100" cy="172" r="7" fill="#00f0ff" fillOpacity="0.6" className="animate-pulse" />
                  <path d="M100 160 L100 184 M88 172 L112 172" stroke="#a855f7" strokeWidth="1.2" />

                  {/* Shoulder Epaulettes & Circuit Nodes */}
                  <circle cx="64" cy="154" r="3" fill="#a855f7" />
                  <circle cx="136" cy="154" r="3" fill="#00f0ff" />
                  <path d="M64 154 L76 166 M136 154 L124 166" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 1" />
                </svg>
              </div>

              {/* Floating Telemetry Badges - High Z (translateZ 40px) */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-900/90 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 translate-z-40">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>3D_AVATAR.SYS</span>
              </div>

              <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900/90 border border-purple-500/40 text-[10px] font-mono text-purple-300 translate-z-40">
                <Zap className="w-3 h-3 text-purple-400" />
                <span>SPATIAL: ON</span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded bg-slate-950/90 border border-slate-800 text-[10px] font-mono text-slate-400 translate-z-30">
                <span className="text-cyan-400">JSTU_EEE_24010608</span>
                <span className="text-purple-400">3D_PERSPECTIVE</span>
              </div>
            </div>

            {/* Floating Orbiting Data Pills - High Z (translateZ 50px) */}
            <div className="absolute -bottom-2 -right-2 sm:-right-4 px-3 py-1 rounded-lg bg-slate-900/95 border border-cyan-400/60 shadow-[0_0_20px_rgba(0,240,255,0.3)] text-xs font-mono text-cyan-300 flex items-center gap-2 translate-z-50 pointer-events-none">
              <Activity className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>EEE-05 // ACTIVE</span>
            </div>

            <div className="absolute -top-2 -left-2 sm:-left-4 px-3 py-1 rounded-lg bg-slate-900/95 border border-purple-400/60 shadow-[0_0_20px_rgba(168,85,247,0.3)] text-xs font-mono text-purple-300 flex items-center gap-1.5 translate-z-50 pointer-events-none">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Dhruba.exe</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
