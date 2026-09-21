// Web Audio API subtle cyberpunk sound generator (no external files needed)
let audioCtx: AudioContext | null = null;
let soundEnabled = false;

export const toggleAudio = (enable?: boolean): boolean => {
  if (enable !== undefined) {
    soundEnabled = enable;
  } else {
    soundEnabled = !soundEnabled;
  }
  return soundEnabled;
};

export const isAudioEnabled = (): boolean => soundEnabled;

const getAudioContext = (): AudioContext | null => {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

export const playCyberBeep = (freq = 880, type: OscillatorType = 'sine', duration = 0.05) => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {
    // Gracefully handle browser autoplay policies
  }
};

export const playClick = () => playCyberBeep(1200, 'triangle', 0.03);
export const playSuccess = () => {
  playCyberBeep(587.33, 'sine', 0.06);
  setTimeout(() => playCyberBeep(880, 'sine', 0.08), 50);
};
export const playTerminalType = () => playCyberBeep(600 + Math.random() * 400, 'square', 0.02);
