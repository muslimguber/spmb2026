import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';

interface HomeProps {
  setSidebarOpen: (open: boolean) => void;
  onSelectModule: (num: number) => void;
  isBrosurLocked?: boolean;
}

/**
 * Home component for the dashboard screen after login.
 */
export const Home: React.FC<HomeProps> = ({ setSidebarOpen, onSelectModule }) => {
  const navItems = [
    { id: 1, name: 'IDENTITAS', icon: Icons.User, isLocked: false },
    { id: 2, name: 'KEUNGGULAN', icon: Icons.Award, isLocked: false },
    { id: 3, name: 'PENDAFTARAN', icon: Icons.BookOpen, isLocked: false },
    { id: 4, name: 'PERSYARATAN', icon: Icons.Lock, isLocked: true },
    { id: 5, name: 'KONTAK', icon: Icons.Phone, isLocked: false },
    { id: 6, name: 'BROSUR', icon: Icons.Lock, isLocked: true },
  ];

  return (
    <motion.div 
      key="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative flex flex-col items-center justify-center min-h-screen py-12 px-6 md:px-12 space-y-6 bg-black/20 backdrop-blur-md rounded-[2.5rem] md:rounded-[3rem] border border-white/10 shadow-2xl text-center max-w-4xl w-full mx-auto overflow-y-auto"
    >
      <motion.div
        animate={{ rotateY: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ perspective: 1000 }}
        className="mb-0"
      >
        <img 
          src="https://i.ibb.co.com/kVLW5n61/logo-smpn-1-bengkalis-kecil-Copy.png" 
          alt="Logo SMPN 1 Bengkalis" 
          className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="space-y-1">
        <h1 className="text-lg md:text-xl lg:text-2xl font-black tracking-tight leading-snug uppercase text-white/90">
          SELAMAT DATANG <br/> di Portal Informasi SPMB <br/> SMPN 1 Bengkalis TP 2026/2027
        </h1>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-white/10"
      >
        <img 
          src="https://i.ibb.co.com/3YTCSLHt/Salinan-dari-SPMB-2026-3.png" 
          alt="Brosur Utama" 
          className="w-full h-auto object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="flex flex-col items-center gap-6 w-full">
        <button 
          onClick={() => setSidebarOpen(true)}
          className="group px-8 py-3 md:px-10 md:py-4 bg-white text-emerald-700 rounded-full font-black text-base md:text-xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
        >
          <span>LIHAT INFORMASI</span>
        </button>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-2xl mt-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectModule(item.id)}
              className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/15 hover:scale-[1.03] active:scale-[0.97] transition-all group relative"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-2 group-hover:bg-white/20 transition-colors">
                <item.icon size={20} className={item.isLocked ? "text-amber-400" : "text-white"} />
              </div>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white/80 group-hover:text-white transition-colors text-center">
                {item.name}
              </span>
              {item.isLocked && (
                <div className="absolute top-2.5 right-2.5 bg-amber-500/20 text-amber-400 p-1 rounded-md" title="Terkunci">
                  <Icons.Lock size={10} />
                </div>
              )}
            </button>
          ))}
        </div>
        
        <div className="max-w-xs md:max-w-md mt-2">
          <p className="text-xs md:text-sm italic opacity-60 font-medium leading-relaxed px-4 text-white">
            "Pendidikan yang tepat adalah INVESTASI terbaik untuk masa depan anak."
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0">
        <p className="text-[9px] font-bold tracking-widest opacity-30 uppercase">
          Copyright © SMPN 1 BENGKALIS
        </p>
      </div>
    </motion.div>
  );
};
