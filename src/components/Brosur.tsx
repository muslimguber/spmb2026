import React from 'react';
import { motion } from 'motion/react';
import { Lock } from 'lucide-react';
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

export const Brosur: React.FC<ModulProps> = ({ theme, onComplete }) => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl bg-white/10 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-white/10 shadow-2xl flex flex-col items-center gap-6 text-center"
      >
        <div className="w-20 h-20 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2 shadow-inner border border-amber-500/30 animate-pulse animate-duration-1000">
          <Lock size={36} />
        </div>
        
        <div className="space-y-3">
          <h2 className="font-black uppercase tracking-[0.2em] text-white text-2xl md:text-3xl">
            Brosur SPMB
          </h2>
          <p className="font-extrabold uppercase tracking-[0.15em] text-amber-300 text-lg md:text-xl">
            INFORMASI MENYUSUL
          </p>
        </div>
        
        <div className="w-12 h-1 bg-white/20 rounded-full my-2" />
        
        <ThemeButton
          theme={theme}
          onClick={onComplete}
          className="px-10 py-4 text-xs font-black tracking-widest uppercase transition-all hover:scale-105 active:scale-95"
        >
          KEMBALI KE BERANDA
        </ThemeButton>
      </motion.div>
    </div>
  );
};
