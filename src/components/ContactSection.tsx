import React, { useState } from 'react';
import { 
  Mail, 
  Terminal, 
  Send, 
  Linkedin, 
  Github, 
  Facebook, 
  Youtube, 
  Instagram, 
  Copy, 
  CheckCircle2, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  Cpu
} from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData.ts';
import { playClick, playSuccess } from '../utils/audio.ts';

export const ContactSection: React.FC = () => {
  const [copiedPlatform, setCopiedPlatform] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    topic: 'Robotics / Project Collaboration',
    transmissionText: ''
  });
  const [transmissionStatus, setTransmissionStatus] = useState<string | null>(null);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Email': return Mail;
      case 'LinkedIn': return Linkedin;
      case 'GitHub': return Github;
      case 'Facebook': return Facebook;
      case 'YouTube': return Youtube;
      case 'Instagram': return Instagram;
      default: return ExternalLink;
    }
  };

  const handleCopy = (platform: string, text: string) => {
    playClick();
    navigator.clipboard.writeText(text);
    setCopiedPlatform(platform);
    setTimeout(() => setCopiedPlatform(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.senderName || !formData.transmissionText) return;

    playSuccess();
    setTransmissionStatus('PACKET_ENCRYPTED_AND_DISPATCHED');
    setTimeout(() => {
      setTransmissionStatus('TRANSMISSION_STORED_SUCCESSFULLY');
      setFormData({
        senderName: '',
        senderEmail: '',
        topic: 'Robotics / Project Collaboration',
        transmissionText: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#05070c] border-t border-slate-900 overflow-hidden">
      {/* Background cyber lines */}
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>COMMUNICATION ARRAY // DUAL CHANNEL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            LET'S <span className="text-cyan-400">CONNECT</span>
          </h2>
          <p className="text-slate-300 font-sans text-base sm:text-lg font-medium">
            Have an idea, project or collaboration in mind?
          </p>
          <p className="max-w-xl text-slate-400 font-mono text-xs sm:text-sm">
            Reach out directly for robotics collaboration, embedded circuitry, video creative work, or future tech venture discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left: Futuristic Terminal Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-950/90 border border-cyan-500/40 shadow-[0_0_35px_rgba(0,240,255,0.12)] relative">
            <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-800 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-cyan-300 font-bold">TERMINAL_DISPATCH // PORT 8080</span>
              </div>
              <span className="text-slate-500">ENCRYPTION: AES-GCM</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    AGENT / YOUR NAME <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rahman"
                    value={formData.senderName}
                    onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    RETURN FREQUENCY / EMAIL <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. contact@domain.com"
                    value={formData.senderEmail}
                    onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  TRANSMISSION SUBJECT / TOPIC
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                >
                  <option value="Robotics / Hardware Prototyping">Robotics / Hardware Prototyping</option>
                  <option value="Clever Sapiens Collaboration">Clever Sapiens Collaboration</option>
                  <option value="EEE Academic / JSTU Inquiries">EEE Academic / JSTU Inquiries</option>
                  <option value="Creative Media / Video / LaTeX">Creative Media / Video / LaTeX</option>
                  <option value="Future Venture & Business Ideas">Future Venture & Business Ideas</option>
                  <option value="General Greetings / Anime Talk">General Greetings / Anime Talk</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  PAYLOAD / MESSAGE BODY <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Transmit your query, idea, or proposal here..."
                  value={formData.transmissionText}
                  onChange={(e) => setFormData({ ...formData, transmissionText: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="text-[11px] font-mono text-slate-500">
                  {transmissionStatus === 'PACKET_ENCRYPTED_AND_DISPATCHED' && (
                    <span className="text-cyan-400 animate-pulse">Routing packet through network...</span>
                  )}
                  {transmissionStatus === 'TRANSMISSION_STORED_SUCCESSFULLY' && (
                    <span className="text-emerald-400">✓ Message recorded! Thank you for connecting.</span>
                  )}
                  {!transmissionStatus && 'Status: Ready to transmit'}
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-display font-bold text-xs tracking-wider transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>DISPATCH TRANSMISSION</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right: Social Coordinates & Placeholders */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Channels & Future Links</span>
              </div>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Connect via direct email or check my social and code hubs. Placeholders can be directly populated in <code className="text-purple-300">portfolioData.ts</code>.
              </p>
            </div>

            <div className="space-y-2.5">
              {SOCIAL_LINKS.map((link) => {
                const Icon = getPlatformIcon(link.platform);
                const isCopied = copiedPlatform === link.platform;
                const isEmail = link.platform === 'Email';

                return (
                  <div
                    key={link.platform}
                    className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {link.platform}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400">
                          {link.handle}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleCopy(link.platform, link.handle)}
                        title="Copy handle"
                        className="p-2 rounded-lg bg-slate-900/90 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        {isCopied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>

                      {isEmail ? (
                        <a
                          href={link.url}
                          className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 hover:bg-cyan-900 border border-cyan-500/40 transition-colors"
                          title="Open Mail Client"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <button
                          onClick={() => {
                            playClick();
                            alert(`Ready for your URL: Add your real ${link.platform} profile URL in /src/data/portfolioData.ts!`);
                          }}
                          className="p-2 rounded-lg bg-slate-900 text-slate-500 hover:text-slate-300 border border-slate-800 transition-colors cursor-pointer"
                          title="Link placeholder"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct Location Node */}
            <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
              <div>
                <span className="text-cyan-400">GEO_STATION:</span> Jamalpur Sadar / Chandpur
              </div>
              <div className="text-purple-400">BANGLADESH</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
