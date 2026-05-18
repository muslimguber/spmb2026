import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';

interface HomeProps {
  setSidebarOpen: (open: boolean) => void;
}

/**
 * Home component for the dashboard screen after login.
 */
export const Home: React.FC<HomeProps> = ({ setSidebarOpen }) => {
  return (
    <motion.div 
      key="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative flex flex-col items-center justify-center h-full min-h-[480px] space-y-6 md:space-y-8 bg-black/20 backdrop-blur-md p-8 md:p-12 pt-4 md:pt-6 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 shadow-2xl text-center max-w-2xl w-full mx-auto"
    >
      <motion.div
        animate={{ rotateY: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ perspective: 1000 }}
        className="mb-0 -mt-2 md:-mt-4"
      >
        <img 
          src="https://i.ibb.co.com/kVLW5n61/logo-smpn-1-bengkalis-kecil-Copy.png" 
          alt="Logo SMPN 1 Bengkalis" 
          className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      <div className="space-y-3 md:space-y-4">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-black tracking-normal leading-relaxed uppercase">
          SELAMAT DATANG <br/> di Portal Informasi <br/> SPMB SMPN 1 Bengkalis <br/> TP 2026/2027
        </h1>
      </div>

      <div className="flex flex-col items-center gap-4 md:gap-6 pt-0">
        <button 
          onClick={() => setSidebarOpen(true)}
          className="group px-8 py-3 md:px-10 md:py-4 bg-white text-emerald-700 rounded-full font-black text-lg md:text-xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
        >
          <span>LIHAT INFORMASI</span>
        </button>
        
        <div className="max-w-xs md:max-w-md mt-2">
          <p className="text-sm md:text-lg italic opacity-80 font-semibold leading-relaxed px-4 text-white/90">
            "Pendidikan yang tepat adalah INVESTASI terbaik untuk masa depan anak."
          </p>
        </div>

        <div className="pt-2 w-full max-w-lg space-y-3">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Kontak Person (WhatsApp):</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { name: 'Abdul Rohim', phone: '081378206174' },
              { name: 'Abdullah Sidik', phone: '08126883245' },
              { name: 'Asmul Husna', phone: '08126869263' },
              { name: 'Meirian Dahlianti', phone: '081268745100' },
            ].map((contact) => (
              <a
                key={contact.phone}
                href={`https://wa.me/62${contact.phone.replace(/^0/, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 px-4 rounded-2xl bg-[#0b5c53] border border-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all group shadow-lg shadow-black/20"
              >
                <div className="text-left text-white">
                  <p className="text-xs md:text-sm font-black uppercase tracking-tight">{contact.name}</p>
                  <p className="text-[10px] opacity-90 font-mono">{contact.phone}</p>
                </div>
                <div className="bg-white/20 p-1.5 rounded-lg group-hover:bg-white/30 transition-colors">
                  <Icons.MessageCircle size={14} className="text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0">
        <p className="text-[10px] font-bold tracking-widest opacity-40 uppercase">
          Copyright © SMPN 1 BENGKALIS
        </p>
      </div>
    </motion.div>
  );
};
