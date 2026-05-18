import React from 'react';
import { motion } from 'motion/react';
import { GardenDecorations } from './GardenDecorations';

interface LoginProps {
  username: string;
  setUsername: (name: string) => void;
  userClass: string;
  setUserClass: (className: string) => void;
  onLogin: (e: React.FormEvent) => void;
}

/**
 * Login component for the name input screen.
 */
export const Login: React.FC<LoginProps> = ({ username, setUsername, userClass, setUserClass, onLogin }) => {
  const classes = ['8A', '8B', '8C', '8D', '8E', '8F', '8G', '8H', '8I'];

  return (
    <div id="app-wrapper" className="w-full h-screen overflow-hidden relative leaf-pattern" style={{ background: '#410052', fontFamily: "'Nunito', sans-serif" }}>
      <GardenDecorations />
      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="bg-black/20 backdrop-blur-md p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 shadow-2xl max-w-xl w-full flex flex-col items-center">
          {/* Title */}
          <div className="fade-up-d1 flex flex-col items-center gap-3 mb-4">
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{ perspective: 1000 }}
            >
              <img 
                src="https://i.ibb.co.com/kVLW5n61/logo-smpn-1-bengkalis-kecil-Copy.png" 
                alt="Logo SMPN 1 Bengkalis" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <h1 id="hero-title" className="text-xl md:text-3xl font-black leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#f3e8ff' }}>
              Portal Informasi <br/> SPMB SMPN 1 Bengkalis 2026/2027
            </h1>
          </div>

          {/* Decorative line */}
          <div className="fade-up-d1 flex items-center gap-3 my-2">
            <div style={{ background: '#d8b4fe', height: '2px', width: '40px', borderRadius: '2px' }}></div>
            <span className="text-lg">📚</span>
            <div style={{ background: '#d8b4fe', height: '2px', width: '40px', borderRadius: '2px' }}></div>
          </div>

          {/* Subtitle */}
          <div className="fade-up-d2 space-y-1">
            <p id="hero-subtitle" className="text-sm md:text-base max-w-md leading-relaxed mx-auto" style={{ color: '#d8b4fe', opacity: 0.8 }}>
              "Membangun Generasi Cerdas dan Berkarakter"
            </p>
          </div>

          {/* Button Section */}
          <div className="fade-up-d3 mt-6 w-full max-w-xs md:max-w-sm">
            <form onSubmit={onLogin} className="flex flex-col gap-3">
              <button 
                type="submit" 
                className="btn-garden pulse-glow inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-xl font-bold tracking-wide mt-2 w-full" 
                style={{ background: 'linear-gradient(135deg, #a855f7, #7e22ce)', color: '#fff', border: 'none', cursor: 'pointer' }}
              > 
                <span>KUNJUNGI PORTAL</span> 
              </button>
            </form>
          </div>

          {/* Tagline */}
          <p id="tagline" className="fade-up-d3 mt-8 text-sm tracking-widest uppercase" style={{ color: '#d8b4fe', opacity: 0.6 }}>
            🎓 Cerdas • Berani • Mandiri 🎓
          </p>
          <p className="fade-up-d3 mt-2 text-[10px] font-bold tracking-wide" style={{ color: '#d8b4fe' }}>
            Copyright SMPN 1 BENGKALIS
          </p>
        </div>
      </main>
    </div>
  );
};
