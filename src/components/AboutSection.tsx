import React from 'react';
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Calendar, 
  BadgeCheck, 
  Cpu, 
  Compass, 
  Lightbulb, 
  Target,
  Sparkles,
  Quote
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const AboutSection: React.FC = () => {
  const cards = [
    { label: 'Age', value: `${PERSONAL_INFO.age} Years Old`, icon: Calendar, highlight: false, note: 'Born 2004' },
    { label: 'Student ID', value: PERSONAL_INFO.studentId, icon: BadgeCheck, highlight: true, note: 'Official Academic ID' },
    { label: 'Department', value: 'Electrical & Electronic Eng. (EEE)', icon: Cpu, highlight: false, note: 'Core Hardware & Systems' },
    { label: 'University', value: PERSONAL_INFO.university, icon: GraduationCap, highlight: false, note: 'JSTU — Bangladesh' },
    { label: 'Current Semester', value: PERSONAL_INFO.academicStatus, icon: Compass, highlight: true, note: 'Batch EEE-05' },
    { label: 'Present Address', value: PERSONAL_INFO.presentAddress, icon: MapPin, highlight: false, note: 'Campus Residence Node' },
    { label: 'Permanent Address', value: PERSONAL_INFO.permanentAddress, icon: MapPin, highlight: false, note: 'Family Origin Node' },
    { label: 'Nationality', value: PERSONAL_INFO.nationality, icon: Target, highlight: false, note: 'Citizen of Bangladesh' }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#080b12] border-t border-slate-900 overflow-hidden">
      {/* Background cyber lines */}
      <div className="absolute inset-0 circuit-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <User className="w-3.5 h-3.5 text-cyan-400" />
            <span>BIO_MATRIX // PROFILE DECRYPTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            WHO IS <span className="text-cyan-400">DHRUBA?</span>
          </h2>
          <p className="max-w-2xl text-slate-400 font-mono text-sm sm:text-base">
            Electrical and Electronic Engineering student combining hardware rigor, software logic, and creative ambition.
          </p>
        </div>

        {/* Narrative & Long-term Ambition Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl" />
              
              <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>The Engineering Journey in Motion</span>
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
                I am an Electrical and Electronic Engineering student at Jamalpur Science & Technology University (JSTU) passionate about the frontiers of <strong className="text-cyan-300 font-semibold">robotics, artificial intelligence, embedded coding, video editing, LaTeX documentation, and team management</strong>.
              </p>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Rather than treating engineering as mere theoretical equations, I thrive on <strong className="text-purple-300 font-semibold">learning by building real projects</strong> — whether it is designing flame-extinguishing rovers, constructing biomedical ECG acquisition apparatus, or simulating home automation architecture in Tinkercad.
              </p>
            </div>
          </div>

          {/* Ambition Callout Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900/80 to-purple-950/40 border border-cyan-500/40 shadow-[0_0_30px_rgba(0,240,255,0.1)] relative group">
              <Quote className="w-10 h-10 text-cyan-400/30 mb-3" />
              <blockquote className="text-lg sm:text-xl font-display font-bold text-slate-100 leading-snug mb-4">
                {PERSONAL_INFO.coreQuote}
              </blockquote>
              <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs font-mono text-cyan-300">
                <span>Dhruba Acharjee</span>
                <span className="text-purple-400">Vision Statement</span>
              </div>
            </div>
          </div>

        </div>

        {/* Personal Information Futuristic Cards */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Identity & Academic Coordinates</span>
            </span>
            <span className="text-xs font-mono text-slate-500">8 NODES VERIFIED</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cards.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={i}
                  className={`p-5 rounded-xl transition-all duration-300 relative group overflow-hidden ${
                    item.highlight 
                      ? 'bg-slate-900/80 border border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.1)]' 
                      : 'bg-slate-950/70 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {item.label}
                    </span>
                    <div className={`p-2 rounded-lg ${
                      item.highlight ? 'bg-cyan-950/80 text-cyan-400' : 'bg-slate-900 text-slate-400 group-hover:text-cyan-400'
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="text-base sm:text-lg font-display font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {item.value}
                  </div>

                  <div className="text-[11px] font-mono text-slate-500">
                    {item.note}
                  </div>

                  {/* Corner cyber accent */}
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
