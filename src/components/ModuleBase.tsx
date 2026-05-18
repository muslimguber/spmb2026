import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, ChevronLeft, Trophy, X } from 'lucide-react';
import { Theme } from '../types';
import { VideoPlayer } from './VideoPlayer';
import { ThemeButton } from './ThemeButton';

const PRAISES = [
  'Kamu Luar Biasa!',
  'Kamu Keren!',
  'Kamu Mantap!',
  'Kamu Hebat Sekali!',
  'Kamu Terus Berjuang!',
  'Kamu Fantastis!',
  'Kamu Cerdas!',
  'Kamu Brilian!'
];

interface Page {
  id: number;
  title: string;
  titleSize?: 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  content: string;
  triggerQuestion?: string;
  videoUrl?: string;
  isGame?: boolean;
  isFinalQuiz?: boolean;
  isSheet?: boolean;
  sheetUrl?: string;
  quiz?: {
    question: string;
    options: { 
      id: string; 
      text: string; 
      isCorrect: boolean;
      redirectModule?: number;
      redirectPage?: number;
      customMessage?: string;
    }[];
  };
}

interface ModuleData {
  title: string;
  pages: Page[];
}

interface ModuleBaseProps {
  theme: Theme;
  username: string;
  userClass: string;
  moduleNumber: number;
  searchQuery?: string;
  onComplete: () => void;
  onRedirect?: (moduleNum: number, pageNum?: number) => void;
  service: {
    getIntroduction: () => ModuleData;
  };
}

export const ModuleBase: React.FC<ModuleBaseProps> = ({ 
  theme, 
  username, 
  userClass, 
  moduleNumber, 
  searchQuery, 
  onComplete,
  onRedirect,
  service 
}) => {
  const data = React.useMemo(() => service.getIntroduction(), [service]);
  const [activePage, setActivePage] = useState(0);
  const [gameLevel, setGameLevel] = useState(1);
  const [completedPages, setCompletedPages] = useState<number[]>([]);
  const [quizActive, setQuizActive] = useState<boolean>(false);
  const [quizSelected, setQuizSelected] = useState<string | null>(null);
  const [quizDelay, setQuizDelay] = useState(false);
  
  const quizRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuizDelay(true);
    const timer = setTimeout(() => {
      setQuizDelay(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, [activePage, moduleNumber]);

  useEffect(() => {
    if (quizActive && quizRef.current) {
      setTimeout(() => {
        quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }, [quizActive]);

  const isTeacher = username.toLowerCase() === 'gurusmp';
  const isUnlockedGlobally = searchQuery === moduleNumber.toString() || isTeacher;

  const [showPopup, setShowPopup] = useState<{ 
    show: boolean; 
    type: 'success' | 'error'; 
    praise?: string;
    message: string;
    hideScore?: boolean;
  }>({
    show: false,
    type: 'success',
    message: '',
    hideScore: false
  });

  // Load persistence
  useEffect(() => {
    const savedActivePage = localStorage.getItem(`ipa_modul_${moduleNumber}_active_page`);
    const savedCompletedPages = localStorage.getItem(`ipa_modul_${moduleNumber}_completed_pages`);

    if (savedActivePage) setActivePage(parseInt(savedActivePage, 10));
    else setActivePage(0);
    
    if (savedCompletedPages) {
      try {
        setCompletedPages(JSON.parse(savedCompletedPages));
      } catch (e) {
        setCompletedPages([]);
      }
    } else {
      setCompletedPages([]);
    }
    
    setQuizActive(false);
    setQuizSelected(null);
  }, [moduleNumber]);

  // Save persistence
  useEffect(() => {
    localStorage.setItem(`ipa_modul_${moduleNumber}_active_page`, activePage.toString());
  }, [activePage, moduleNumber]);

  useEffect(() => {
    localStorage.setItem(`ipa_modul_${moduleNumber}_completed_pages`, JSON.stringify(completedPages));
  }, [completedPages, moduleNumber]);

  const handleQuiz = (optionId: string) => {
    setQuizSelected(optionId);
    const currentPage = data.pages[activePage];
    if (!currentPage.quiz) return;

    const option = currentPage.quiz.options.find(o => o.id === optionId);
    
    if (option?.isCorrect) {
      const isSpecificTransition = moduleNumber === 1 && activePage === 0;
      
      // Check for custom message or specific redirection message
      let message = 'Jawabanmu benar! Kamu mendapatkan nilai 100.';
      let praise = isSpecificTransition ? 'AYO MULAI BELAJAR' : PRAISES[Math.floor(Math.random() * PRAISES.length)];
      
      if (option.customMessage) {
        message = option.customMessage;
        praise = 'Perhatian!';
      } else if (option.redirectModule) {
        message = `ayo kita kerjakan modul ${option.redirectModule} terlebih dahulu`;
        praise = 'Mulai Modul Lain';
      }

      setShowPopup({
        show: true,
        type: 'success',
        praise: praise,
        message: message,
        hideScore: !!(option.redirectModule || option.customMessage)
      });
      setCompletedPages(prev => prev.includes(activePage) ? prev : [...prev, activePage]);
    } else {
      setShowPopup({
        show: true,
        type: 'error',
        praise: 'Ayo Coba Lagi!',
        message: 'Coba perhatikan lagi materinya ya.'
      });
    }
  };

  const handlePopupClick = () => {
    if (showPopup.type === 'success') {
      const currentPage = data.pages[activePage];
      const selectedOption = currentPage.quiz?.options.find(o => o.id === quizSelected);
      
      if (selectedOption?.redirectModule && onRedirect) {
        onRedirect(selectedOption.redirectModule, selectedOption.redirectPage);
        setShowPopup(prev => ({ ...prev, show: false }));
        return;
      }

      if (activePage < data.pages.length - 1) {
        setActivePage(activePage + 1);
        setQuizActive(false);
        setQuizSelected(null);
      } else {
        onComplete();
      }
    }
    setShowPopup(prev => ({ ...prev, show: false }));
  };

  const currentPage = data.pages[activePage];

  return (
    <div className="max-w-3xl mx-auto min-h-[80vh] flex flex-col pb-10">
      {/* Navbar Tabs */}
      <div className="flex justify-center w-full gap-1 md:gap-2 mb-8 px-2 py-2">
        {data.pages.map((page, index) => {
          const isUnlocked = index === 0 || completedPages.includes(index - 1) || isUnlockedGlobally;
          const isActive = activePage === index;
          const isCompleted = completedPages.includes(index);

          return (
            <motion.button
              key={index}
              layout
              disabled={!isUnlocked}
              onClick={() => {
                setActivePage(index);
                setQuizActive(false);
                setQuizSelected(null);
              }}
              className={`h-10 rounded-lg text-[10px] md:text-xs font-black transition-all flex items-center justify-center gap-1 relative overflow-hidden min-w-0 shadow-sm ${
                isActive 
                  ? 'flex-[2] bg-white text-emerald-600 shadow-xl px-2 z-10' 
                  : isUnlocked 
                    ? 'flex-1 bg-white/30 text-white hover:bg-white/40 shadow-md' 
                    : 'flex-1 bg-black/20 text-white/20 cursor-not-allowed'
              }`}
            >
              {isActive ? (
                <span className="whitespace-nowrap">
                  {`Hal ${index + 1}`}
                </span>
              ) : (
                <span>{index + 1}</span>
              )}
              {isCompleted && !isActive && <CheckCircle2 size={8} className="absolute top-1 right-1 text-emerald-400" />}
            </motion.button>
          );
        })}
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {currentPage.isFinalQuiz || currentPage.isGame ? (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center p-10 bg-white/10 rounded-3xl backdrop-blur-md border border-white/20">
              <h2 className="text-xl font-bold text-white mb-2">Konten Tidak Tersedia</h2>
              <p className="text-white/60 mb-6">Bagian ini telah dihapus atau sedang dalam pembaruan.</p>
              <ThemeButton theme={theme} onClick={() => {
                if (activePage < data.pages.length - 1) setActivePage(activePage + 1);
                else onComplete();
              }}>
                Lanjut ke Halaman Berikutnya
              </ThemeButton>
            </motion.div>
          ) : (
            <motion.div 
              key={activePage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="bg-white/70 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border-2 border-white/60 shadow-xl max-w-2xl mx-auto space-y-6">
                <div className="text-center space-y-3">
                  <h1 className={`font-black text-slate-800 uppercase tracking-tight ${
                    currentPage.titleSize === 'sm' ? 'text-sm' :
                    currentPage.titleSize === 'base' ? 'text-base' :
                    currentPage.titleSize === 'lg' ? 'text-lg' :
                    currentPage.titleSize === 'xl' ? 'text-xl' :
                    'text-2xl'
                  }`}>
                    {currentPage.title}
                  </h1>
                  {currentPage.triggerQuestion && (
                    <p className="text-sm font-bold italic text-slate-800">"{currentPage.triggerQuestion}"</p>
                  )}
                </div>

                {currentPage.videoUrl && <VideoPlayer url={currentPage.videoUrl} title={currentPage.title} />}
                
                {currentPage.isSheet && currentPage.sheetUrl && (
                  <div className="relative h-[600px] w-full bg-slate-100 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-inner my-4">
                    <iframe 
                      src={currentPage.sheetUrl}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                )}

                <div className="prose prose-slate max-w-none text-slate-700 whitespace-pre-line font-medium leading-relaxed text-justify">
                  {currentPage.content}
                </div>

                <div className="flex flex-row gap-2 justify-center">
                  {/* Always show back button if not first page */}
                  {activePage > 0 && (
                    <ThemeButton 
                      theme={theme}
                      variant="secondary"
                      onClick={() => {
                        setActivePage(activePage - 1);
                        setQuizActive(false);
                      }}
                      className="flex-1 px-2 text-sm sm:text-base py-3"
                    >
                      <ChevronLeft size={18} />
                      <span className="hidden xs:inline">Kembali</span>
                    </ThemeButton>
                  )}
                  
                  {/* Challenge Button logic */}
                  {currentPage.quiz && (
                    <ThemeButton 
                      theme={theme}
                      disabled={quizDelay}
                      onClick={() => setQuizActive(!quizActive)}
                      className="flex-[2] px-2 text-sm sm:text-base py-3 disabled:opacity-50"
                    >
                      {completedPages.includes(activePage) 
                        ? (quizActive ? 'Tutup Tantangan' : 'Lihat Tantangan')
                        : 'Jawab Tantangan'
                      }
                    </ThemeButton>
                  )}

                  {/* Next Button logic (only if completed and not last page) */}
                  {completedPages.includes(activePage) && activePage < data.pages.length - 1 && (
                    <ThemeButton
                      theme={theme}
                      disabled={quizDelay}
                      onClick={() => {
                        setActivePage(activePage + 1);
                        setQuizActive(false);
                      }}
                      className="flex-1 px-2 text-sm sm:text-base py-3 disabled:opacity-50"
                    >
                      <span className="hidden xs:inline text-white">LANJUT</span>
                      <ChevronRight size={18} className="text-white" />
                    </ThemeButton>
                  )}
                </div>
              </div>

              {(quizActive || (!completedPages.includes(activePage) && quizActive)) && currentPage.quiz && (
                <motion.div 
                  ref={quizRef}
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/95 p-6 rounded-3xl shadow-xl max-w-xl mx-auto border"
                >
                  <p className="font-black text-slate-800 mb-4 text-center">{currentPage.quiz.question}</p>
                  <div className="grid grid-cols-1 gap-2">
                    {currentPage.quiz.options.map(opt => {
                      const isCompleted = completedPages.includes(activePage);
                      const isSelected = quizSelected === opt.id || (isCompleted && opt.isCorrect);
                      const isCorrect = opt.isCorrect;
                      
                      return (
                        <button 
                          key={opt.id}
                          disabled={isCompleted}
                          onClick={() => handleQuiz(opt.id)}
                          className={`p-3 rounded-xl border-2 text-left font-bold transition-all ${
                            isSelected 
                            ? 'shadow-sm'
                            : `border-slate-100 bg-white ${isCompleted ? 'cursor-default' : 'hover:border-slate-300 text-slate-700'}`
                          }`}
                          style={!isSelected ? { color: isCompleted ? '#94a3b8' : '#334155' } : {
                            borderColor: isCorrect ? '#10b981' : '#f43f5e',
                            backgroundColor: isCorrect ? '#ecfdf5' : '#fff1f2',
                            color: isCorrect ? '#065f46' : '#9f1239'
                          }}
                        >
                          <div className="flex justify-between items-center">
                            <span>{opt.text}</span>
                            {isCompleted && isCorrect && <CheckCircle2 size={16} />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Simplified Popup */}
      <AnimatePresence>
        {showPopup.show && (
          <div className="fixed inset-0 flex items-center justify-center p-4 z-[100] backdrop-blur-sm bg-black/40">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 10 }}
              className={`max-w-sm w-full p-8 rounded-[3rem] text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 bg-white`}
              style={{ borderColor: showPopup.type === 'success' ? theme.accent : '#f43f5e' }}
            >
              <div className={`mx-auto mb-8 flex items-center justify-center gap-4 ${
                showPopup.type === 'success' ? '' : 'w-24 h-24 rounded-full bg-rose-50 text-rose-600 border-4 border-rose-100'
              }`}>
                {showPopup.type === 'success' ? (
                  !showPopup.hideScore ? (
                    <>
                      <motion.div
                        initial={{ rotate: -20, scale: 0.5 }}
                        animate={{ rotate: -10, scale: 1 }}
                        transition={{ type: 'spring', delay: 0.2 }}
                      >
                        <Trophy size={48} className="text-amber-400 fill-amber-400/20" />
                      </motion.div>
                      
                      <div className="relative -ml-2">
                        <span className="text-8xl font-black italic tracking-tighter" style={{ color: theme.accent, filter: 'brightness(0.8)' }}>100</span>
                      </div>

                      <motion.div
                        initial={{ rotate: 20, scale: 0.5 }}
                        animate={{ rotate: 10, scale: 1 }}
                        transition={{ type: 'spring', delay: 0.2 }}
                      >
                        <Trophy size={48} className="text-amber-400 fill-amber-400/20" />
                      </motion.div>
                    </>
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-emerald-50 text-emerald-600 border-4 border-emerald-100 flex items-center justify-center">
                      <CheckCircle2 size={48} />
                    </div>
                  )
                ) : <X size={48} />}
              </div>
              <h3 className={`text-4xl font-black mb-2`} style={{ color: showPopup.type === 'success' ? theme.accent : '#9f1239', filter: showPopup.type === 'success' ? 'brightness(0.6)' : 'none' }}>
                {showPopup.praise || (showPopup.type === 'success' ? 'Berhasil!' : 'Ups!')}
              </h3>
              {showPopup.message && (
                <p className="text-slate-900 font-bold mb-8 leading-relaxed text-lg">{showPopup.message}</p>
              )}
              {!showPopup.message && <div className="mb-10" />}
              <ThemeButton 
                theme={theme}
                onClick={handlePopupClick}
                fullWidth
                size="lg"
                className="py-5 text-xl tracking-widest"
                style={showPopup.type === 'error' ? { backgroundColor: '#f43f5e' } : {}}
              >
                {showPopup.type === 'success' ? 'LANJUT' : 'COBA LAGI'}
              </ThemeButton>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
