import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Share2, ArrowLeft } from 'lucide-react';
import { Theme } from '../types';
import { ThemeButton } from './ThemeButton';

interface ModulProps {
  theme: Theme;
  username: string;
  userClass: string;
  moduleNumber: number;
  onComplete: () => void;
}

const BROSUR_IMAGES = [
  {
    id: 1,
    title: 'Halaman 1',
    url: 'https://i.ibb.co.com/d4nFSRyL/spmb-2026-1.png'
  },
  {
    id: 2,
    title: 'Halaman 2',
    url: 'https://i.ibb.co.com/n2KjCyM/spmb-2026-3.png'
  },
  {
    id: 3,
    title: 'Halaman 3',
    url: 'https://i.ibb.co.com/TqbJ3CF3/SPMB-2026.png'
  }
];

export const Brosur: React.FC<ModulProps> = ({ theme, onComplete }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleDownload = (url: string) => {
    // Open in new tab as fallback or direct link
    window.open(url, '_blank');
  };

  const handleShare = async (url: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Brosur SPMB 2026/2027',
          text: 'Cek brosur penerimaan siswa baru SMPN 1 Bengkalis!',
          url: url,
        });
      } catch (error) {
        console.error('Error sharing', error);
      }
    } else {
      navigator.clipboard.writeText(url);
      alert('Link gambar disalin ke clipboard!');
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col p-4 md:p-8">
      <div className="mb-6 flex items-center justify-between">
        <ThemeButton 
          theme={theme} 
          variant="secondary" 
          onClick={onComplete}
          className="px-4 py-2"
        >
          <ArrowLeft size={18} />
          <span className="hidden xs:inline">Kembali</span>
        </ThemeButton>
        <span className="font-black text-white uppercase tracking-widest text-lg md:text-xl text-center flex-1">Brosur SPMB</span>
        <div className="w-12 md:w-24" /> {/* Spacer */}
      </div>

      <div className="flex bg-black/30 p-1.5 rounded-2xl mb-8 self-center">
        {BROSUR_IMAGES.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(index)}
            className={`px-4 md:px-8 py-2.5 rounded-xl text-xs md:text-sm font-black transition-all relative ${
              activeTab === index ? 'text-white' : 'text-white/50 hover:text-white/80'
            }`}
          >
            {activeTab === index && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-white/20 rounded-xl"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{item.title}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full max-w-2xl bg-white/5 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-4 md:p-6 border border-white/10 shadow-2xl flex flex-col gap-6"
          >
            <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-black/20 group relative">
              <img 
                src={BROSUR_IMAGES[activeTab].url} 
                alt={BROSUR_IMAGES[activeTab].title}
                className="w-full h-auto object-contain cursor-zoom-in"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-row gap-3">
              <ThemeButton
                theme={theme}
                variant="secondary"
                fullWidth
                onClick={() => handleDownload(BROSUR_IMAGES[activeTab].url)}
                className="py-4 md:py-5"
              >
                <Download size={20} />
                DOWNLOAD
              </ThemeButton>
              <ThemeButton
                theme={theme}
                variant="outline"
                fullWidth
                onClick={() => handleShare(BROSUR_IMAGES[activeTab].url)}
                className="py-4 md:py-5 !bg-white/10 !border-white/20 !text-white hover:!bg-white/20"
              >
                <Share2 size={20} />
                SHARE
              </ThemeButton>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
