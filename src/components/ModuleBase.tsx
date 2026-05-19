import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, ChevronLeft, Trophy, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
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
  bgColor?: string;
  textColor?: string;
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

  const isUnlockedGlobally = true;

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
          const isUnlocked = true;
          const isActive = activePage === index;

          return (
            <motion.button
              key={index}
              layout
              onClick={() => {
                setActivePage(index);
                setQuizActive(false);
                setQuizSelected(null);
              }}
              className={`h-10 rounded-lg text-[10px] md:text-xs font-black transition-all flex items-center justify-center px-3 relative overflow-hidden min-w-0 shadow-sm ${
                isActive 
                  ? 'bg-white text-emerald-600 shadow-xl z-10' 
                  : 'bg-white/30 text-white hover:bg-white/40 shadow-md flex-1'
              }`}
            >
              <span className="whitespace-nowrap uppercase tracking-tighter">
                {page.title}
              </span>
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
              <div 
                className="p-6 md:p-8 rounded-[2rem] border-2 border-white/60 shadow-xl max-w-2xl mx-auto space-y-6"
                style={{ 
                  backgroundColor: currentPage.bgColor || 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(12px)',
                  color: currentPage.textColor || '#1e293b'
                }}
              >
                <div className="text-center space-y-3">
                  <h1 className={`font-black uppercase tracking-tight ${
                    currentPage.titleSize === 'sm' ? 'text-sm' :
                    currentPage.titleSize === 'base' ? 'text-base' :
                    currentPage.titleSize === 'lg' ? 'text-lg' :
                    currentPage.titleSize === 'xl' ? 'text-xl' :
                    'text-2xl'
                  }`}
                  style={{ color: currentPage.textColor || '#1e293b' }}
                  >
                    {currentPage.title}
                  </h1>
                  {currentPage.triggerQuestion && (
                    <p className="text-sm font-bold italic" style={{ color: currentPage.textColor || '#334155' }}>"{currentPage.triggerQuestion}"</p>
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

                <div className="prose prose-slate max-w-none font-medium leading-relaxed text-justify markdown-content" style={{ color: currentPage.textColor || '#334155' }}>
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>{currentPage.content}</ReactMarkdown>
                </div>

                <div className="flex justify-center pt-4">
                  <ThemeButton
                    theme={theme}
                    onClick={() => onComplete()}
                    className="px-8 py-3 text-sm font-black tracking-widest"
                  >
                    KEMBALI KE BERANDA
                  </ThemeButton>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
