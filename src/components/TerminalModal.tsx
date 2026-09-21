import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Terminal, 
  Send, 
  Maximize2, 
  Minimize2, 
  Trash2, 
  Sparkles,
  CornerDownLeft
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA, SKILLS_DATA, EASTER_EGGS } from '../data/portfolioData.ts';
import { playTerminalType, playClick, playSuccess } from '../utils/audio.ts';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  output: string | React.ReactNode;
  type?: 'system' | 'user' | 'success' | 'warning' | 'easter-egg';
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ 
  isOpen, 
  onClose, 
  onNavigateSection 
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      id: 'init-1',
      command: 'sys.init',
      output: 'Dhruba.exe [Version 2.4.0-EEE.JSTU]\nType "help" for available commands or explore sections.',
      type: 'system'
    }
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    playTerminalType();

    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (trimmed === 'exit' || trimmed === 'quit') {
      onClose();
      return;
    }

    let resultOutput: React.ReactNode = '';
    let resultType: CommandHistoryItem['type'] = 'system';

    switch (trimmed) {
      case 'help':
        resultOutput = (
          <div className="space-y-1">
            <p className="text-cyan-300 font-bold">Available Commands:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <div><span className="text-purple-300 font-bold">about</span> : Display personal bio & JSTU info</div>
              <div><span className="text-purple-300 font-bold">projects</span> : List all built prototypes</div>
              <div><span className="text-purple-300 font-bold">skills</span> : Output capability matrix</div>
              <div><span className="text-purple-300 font-bold">journey</span> : View career milestones</div>
              <div><span className="text-purple-300 font-bold">anime</span> : Open entertainment quadrant</div>
              <div><span className="text-purple-300 font-bold">clever</span> : View Clever Sapiens initiative</div>
              <div><span className="text-purple-300 font-bold">mission</span> : The bigger vision & roadmap</div>
              <div><span className="text-purple-300 font-bold">contact</span> : Transmission endpoints</div>
              <div><span className="text-purple-300 font-bold">whoami</span> : Identity decryption</div>
              <div><span className="text-purple-300 font-bold">clear</span> : Reset screen buffer</div>
              <div><span className="text-purple-300 font-bold">exit</span> : Close terminal</div>
            </div>
            <p className="text-slate-500 text-[11px] pt-1">Try typing easter eggs like "sudo dhruba" or "future".</p>
          </div>
        );
        break;

      case 'sudo dhruba':
        playSuccess();
        resultType = 'easter-egg';
        resultOutput = (
          <div className="text-emerald-400 font-mono space-y-1">
            <p className="font-bold">&gt; Access granted.</p>
            <p>&gt; Welcome to Dhruba.exe — Root privileges unlocked.</p>
            <p className="text-xs text-slate-400">Engineering is the foundation. Entrepreneurship is the destination.</p>
          </div>
        );
        break;

      case 'future':
        resultType = 'easter-egg';
        resultOutput = (
          <div className="text-cyan-300 font-mono space-y-1">
            <p>&gt; Building something bigger...</p>
            <p className="text-xs text-slate-300">Target: Scalable technology-driven ventures from Bangladesh to the world.</p>
          </div>
        );
        break;

      case 'whoami':
        resultOutput = `${PERSONAL_INFO.name} | Age: ${PERSONAL_INFO.age} | EEE @ JSTU (ID: ${PERSONAL_INFO.studentId}) | Status: 2nd Year, 2nd Semester | CR of EEE-05`;
        break;

      case 'about':
        onNavigateSection('#about');
        resultOutput = `Navigating to #about. ${PERSONAL_INFO.bio}`;
        break;

      case 'projects':
        onNavigateSection('#projects');
        resultOutput = (
          <div className="space-y-1">
            <p className="text-cyan-400 font-bold">Built Projects Registry:</p>
            {PROJECTS_DATA.map((p) => (
              <div key={p.id} className="text-xs">
                [{p.projectNumber}] <strong className="text-white">{p.title}</strong> — {p.status}: {p.tagline}
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
      case 'matrix':
        onNavigateSection('#skills');
        resultOutput = `Navigating to #skills. Registered ${SKILLS_DATA.length} skills across Engineering, Tech, Creative, and Management.`;
        break;

      case 'journey':
        onNavigateSection('#journey');
        resultOutput = 'Navigating to #journey: Student (01) → Builder (02) → Creator (03) → Leader (04) → Entrepreneur (05).';
        break;

      case 'anime':
        onNavigateSection('#universe');
        resultOutput = 'Navigating to #universe: Bankai, Grimoires, Titans & Shadow arts loaded.';
        break;

      case 'clever':
      case 'cleversapiens':
        onNavigateSection('#cleversapiens');
        resultOutput = 'Navigating to #cleversapiens: Clever Sapiens incubator and multimedia initiative.';
        break;

      case 'mission':
      case 'entrepreneur':
        onNavigateSection('#mission');
        resultOutput = 'Navigating to #mission: "Engineering is the foundation. Entrepreneurship is the destination."';
        break;

      case 'contact':
        onNavigateSection('#contact');
        resultOutput = `Navigating to #contact. Email: ${PERSONAL_INFO.systemSpecs.currentFocus}. All channels online.`;
        break;

      default:
        resultType = 'warning';
        resultOutput = `command not found: "${trimmed}". Type "help" for a list of available routines.`;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: cmdStr,
        output: resultOutput,
        type: resultType
      }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      <div 
        className={`relative w-full rounded-2xl bg-[#070a10] border border-cyan-500/50 shadow-[0_0_60px_rgba(0,240,255,0.25)] flex flex-col overflow-hidden transition-all duration-300 ${
          isMaximized ? 'h-[96vh] max-w-[96vw]' : 'h-[620px] max-w-3xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer" onClick={() => setIsMaximized(!isMaximized)} />
            <div className="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer" onClick={() => handleCommand('help')} />
            
            <div className="ml-3 flex items-center gap-2 text-xs font-mono text-slate-300">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>dhruba@laboratory:~ (Dhruba.exe)</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                playClick();
                setHistory([]);
              }}
              title="Clear terminal buffer"
              className="p-1.5 rounded hover:bg-slate-900 text-slate-400 hover:text-slate-200"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                playClick();
                setIsMaximized(!isMaximized);
              }}
              className="p-1.5 rounded hover:bg-slate-900 text-slate-400 hover:text-slate-200"
            >
              {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              className="p-1.5 rounded hover:bg-slate-900 text-slate-400 hover:text-red-400"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Content Buffer */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-xs sm:text-sm space-y-3 bg-[#070a10] scanline text-slate-300">
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-purple-400 select-none">dhruba@jstu:~$</span>
                <span className="font-semibold text-white">{item.command}</span>
              </div>
              <div className={`pl-4 leading-relaxed ${
                item.type === 'easter-egg' 
                  ? 'text-emerald-300 bg-emerald-950/20 p-2 rounded border border-emerald-500/30'
                  : item.type === 'warning'
                  ? 'text-yellow-400'
                  : 'text-slate-300'
              }`}>
                {item.output}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Field */}
        <div className="p-3 bg-slate-950/90 border-t border-slate-800 flex items-center gap-2">
          <span className="text-purple-400 font-mono text-xs sm:text-sm pl-2 select-none">
            dhruba@jstu:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'projects', 'about', or 'sudo dhruba'..."
            className="flex-1 bg-transparent border-none text-xs sm:text-sm font-mono text-cyan-300 focus:outline-none placeholder-slate-600"
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="px-3 py-1.5 rounded-lg bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-500/30 text-xs font-mono flex items-center gap-1 cursor-pointer"
          >
            <span>Run</span>
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
