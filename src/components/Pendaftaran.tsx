import React from 'react';
import { motion } from 'motion/react';
import { Theme } from '../types';
import { ThemeButton } from './ThemeButton';

interface ModulProps {
  theme: Theme;
  username: string;
  userClass: string;
  moduleNumber: number;
  searchQuery?: string;
  onRedirect?: (moduleNum: number, pageNum?: number) => void;
  onComplete: () => void;
}

export const Pendaftaran: React.FC<ModulProps> = ({ theme, onComplete }) => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl bg-white/10 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 border border-white/10 shadow-2xl flex flex-col items-center gap-8 text-center"
      >
        <img 
          src="https://i.ibb.co.com/n2KjCyM/spmb-2026-3.png" 
          alt="Alur Pendaftaran" 
          className="w-full h-auto rounded-2xl shadow-2xl border border-white/20"
          referrerPolicy="no-referrer"
        />
        <div className="py-4">
          <p className="font-black uppercase tracking-[0.15em] text-white/90 text-base md:text-xl leading-relaxed">
            link akan di buka <br className="md:hidden" /> pada tanggal pendaftaran
          </p>
        </div>
        
        <ThemeButton
          theme={theme}
          onClick={onComplete}
          className="px-10 py-4 text-sm font-black tracking-widest mt-2"
        >
          KEMBALI KE BERANDA
        </ThemeButton>
      </motion.div>
    </div>
  );
};
