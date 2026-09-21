import React, { useState, useRef, useEffect } from 'react';
import { 
  Rotate3d, 
  Play, 
  Pause, 
  Cpu, 
  Bot, 
  Activity, 
  Code2, 
  Sparkles, 
  Rocket, 
  GraduationCap,
  Layers,
  Compass
} from 'lucide-react';
import { playClick } from '../utils/audio.ts';

type CubeFace = 'front' | 'back' | 'right' | 'left' | 'top' | 'bottom';

export const HologramCube3D: React.FC = () => {
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [currentFace, setCurrentFace] = useState<CubeFace>('front');
  const [rotX, setRotX] = useState(-15);
  const [rotY, setRotY] = useState(25);
  const isDraggingRef = useRef(false);
  const startPosRef = useRef({ x: 0, y: 0 });

  // Face rotation definitions in 3D space
  const faceRotations: Record<CubeFace, { x: number; y: number }> = {
    front:  { x: -5, y: 0 },
    back:   { x: -5, y: 180 },
    right:  { x: -5, y: -90 },
    left:   { x: -5, y: 90 },
    top:    { x: -85, y: 0 },
    bottom: { x: 85, y: 0 }
  };

  const handleSelectFace = (face: CubeFace) => {
    playClick();
    setIsAutoRotating(false);
    setCurrentFace(face);
    setRotX(faceRotations[face].x);
    setRotY(faceRotations[face].y);
  };

  const toggleAutoRotate = () => {
    playClick();
    setIsAutoRotating((prev) => !prev);
  };

  // Mouse / Touch Drag 3D Rotation Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsAutoRotating(false);
    isDraggingRef.current = true;
    startPosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - startPosRef.current.x;
    const deltaY = e.clientY - startPosRef.current.y;
    startPosRef.current = { x: e.clientX, y: e.clientY };

    setRotY((prev) => prev + deltaX * 0.7);
    setRotX((prev) => Math.max(-85, Math.min(85, prev - deltaY * 0.7)));
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Touch support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsAutoRotating(false);
    isDraggingRef.current = true;
    if (e.touches.length > 0) {
      startPosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || e.touches.length === 0) return;
    const deltaX = e.touches[0].clientX - startPosRef.current.x;
    const deltaY = e.touches[0].clientY - startPosRef.current.y;
    startPosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };

    setRotY((prev) => prev + deltaX * 0.7);
    setRotX((prev) => Math.max(-85, Math.min(85, prev - deltaY * 0.7)));
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className="relative flex flex-col items-center justify-center select-none py-6">
      
      {/* HUD Telemetry Header */}
      <div className="flex items-center justify-between w-full max-w-md px-4 mb-4 text-xs font-mono">
        <div className="flex items-center gap-2 text-cyan-300">
          <Rotate3d className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
          <span>3D_HOLO_CORE // SPATIAL MATRIX</span>
        </div>

        <button
          onClick={toggleAutoRotate}
          className={`px-2.5 py-1 rounded-md text-[11px] font-mono border transition-all flex items-center gap-1.5 cursor-pointer ${
            isAutoRotating
              ? 'bg-cyan-950 text-cyan-300 border-cyan-500/50 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
          }`}
        >
          {isAutoRotating ? (
            <>
              <Pause className="w-3 h-3 text-cyan-400" />
              <span>SPIN: AUTO</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-slate-400" />
              <span>SPIN: MANUAL</span>
            </>
          )}
        </button>
      </div>

      {/* 3D Perspective Stage Container */}
      <div 
        className="relative w-72 h-72 sm:w-80 sm:h-80 perspective-1000 flex items-center justify-center cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background Hologram Ambient Glow */}
        <div className="absolute inset-4 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        {/* 3D Gyroscope Orbital Rings surrounding the Cube */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="gyro-ring-x" />
          <div className="gyro-ring-y" />
          <div className="gyro-ring-z" />
        </div>

        {/* The 3D Cube Container */}
        <div 
          className={`cube-wrapper ${isAutoRotating ? 'cube-auto-rotate' : ''}`}
          style={!isAutoRotating ? { transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)` } : undefined}
        >
          
          {/* FACE 1: FRONT (Robotics Lab) */}
          <div className="cube-face cube-face-front">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-cyan-400">01 // FRONT</span>
              <Bot className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="text-center my-auto space-y-1">
              <h4 className="text-base sm:text-lg font-display font-bold text-white tracking-wide">
                ROBOTICS LAB
              </h4>
              <p className="text-[11px] text-slate-300 font-sans">
                Autonomous Rovers & Sensor Navigation
              </p>
              <div className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/40">
                Fire Rover • LFR • Human Follower
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-500 flex justify-between">
              <span>HARDWARE</span>
              <span>TESTED</span>
            </div>
          </div>

          {/* FACE 2: BACK (Biomedical & EEE Circuits) */}
          <div className="cube-face cube-face-back border-purple-500/40 shadow-[inset_0_0_30px_rgba(168,85,247,0.15)]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-purple-400">02 // BACK</span>
              <Activity className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-center my-auto space-y-1">
              <h4 className="text-base sm:text-lg font-display font-bold text-white tracking-wide">
                BIO-INSTRUMENTATION
              </h4>
              <p className="text-[11px] text-slate-300 font-sans">
                Electrocardiogram & Analog Circuitry
              </p>
              <div className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-500/40">
                Instrumentation Op-Amps • Filters
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-500 flex justify-between">
              <span>CIRCUITS</span>
              <span>CALIBRATED</span>
            </div>
          </div>

          {/* FACE 3: RIGHT (Software & AI) */}
          <div className="cube-face cube-face-right border-emerald-500/40 shadow-[inset_0_0_30px_rgba(16,185,129,0.15)]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-emerald-400">03 // RIGHT</span>
              <Code2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-center my-auto space-y-1">
              <h4 className="text-base sm:text-lg font-display font-bold text-white tracking-wide">
                SOFTWARE & LOGIC
              </h4>
              <p className="text-[11px] text-slate-300 font-sans">
                Embedded Firmware & Systems
              </p>
              <div className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/40">
                C / C++ • Python • Proteus Sim
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-500 flex justify-between">
              <span>ALGORITHMS</span>
              <span>COMPILED</span>
            </div>
          </div>

          {/* FACE 4: LEFT (Clever Sapiens Initiative) */}
          <div className="cube-face cube-face-left border-pink-500/40 shadow-[inset_0_0_30px_rgba(236,72,153,0.15)]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-pink-400">04 // LEFT</span>
              <Sparkles className="w-5 h-5 text-pink-400" />
            </div>
            <div className="text-center my-auto space-y-1">
              <h4 className="text-base sm:text-lg font-display font-bold text-white tracking-wide">
                CLEVER SAPIENS
              </h4>
              <p className="text-[11px] text-slate-300 font-sans">
                Personal Media & Research Incubator
              </p>
              <div className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-pink-950/80 text-pink-300 border border-pink-500/40">
                LaTeX • Video Media • Showcases
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-500 flex justify-between">
              <span>INCUBATOR</span>
              <span>FOUNDER</span>
            </div>
          </div>

          {/* FACE 5: TOP (JSTU Campus & EEE-05) */}
          <div className="cube-face cube-face-top border-sky-500/40 shadow-[inset_0_0_30px_rgba(56,189,248,0.15)]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-sky-400">05 // TOP</span>
              <GraduationCap className="w-5 h-5 text-sky-400" />
            </div>
            <div className="text-center my-auto space-y-1">
              <h4 className="text-base sm:text-lg font-display font-bold text-white tracking-wide">
                JSTU // EEE-05
              </h4>
              <p className="text-[11px] text-slate-300 font-sans">
                Student ID: 24010608
              </p>
              <div className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950/80 text-sky-300 border border-sky-500/40">
                CR of EEE-05 • 2nd Year, 2nd Sem
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-500 flex justify-between">
              <span>JAMALPUR</span>
              <span>ACADEMIC</span>
            </div>
          </div>

          {/* FACE 6: BOTTOM (Future Ventures Matrix) */}
          <div className="cube-face cube-face-bottom border-amber-500/40 shadow-[inset_0_0_30px_rgba(245,158,11,0.15)]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-amber-400">06 // BOTTOM</span>
              <Rocket className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-center my-auto space-y-1">
              <h4 className="text-base sm:text-lg font-display font-bold text-white tracking-wide">
                BIGGER MISSION
              </h4>
              <p className="text-[11px] text-slate-300 font-sans">
                Engineering → Scalable Ventures
              </p>
              <div className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-500/40">
                Tech • Creativity • Enterprise
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-500 flex justify-between">
              <span>HORIZON</span>
              <span>2026-2032</span>
            </div>
          </div>

        </div>
      </div>

      {/* 3D Drag Hint */}
      <div className="mt-3 text-center">
        <span className="text-[11px] font-mono text-slate-500">
          ✦ Click and drag in 3D space to rotate the core
        </span>
      </div>

      {/* 3D Face Selector Controls (Pure HTML/CSS buttons) */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3 max-w-sm">
        {(['front', 'back', 'right', 'left', 'top', 'bottom'] as CubeFace[]).map((f) => (
          <button
            key={f}
            onClick={() => handleSelectFace(f)}
            className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all cursor-pointer ${
              currentFace === f && !isAutoRotating
                ? 'bg-cyan-950 text-cyan-300 border border-cyan-400/60 shadow-[0_0_8px_rgba(0,240,255,0.3)]'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

    </div>
  );
};
