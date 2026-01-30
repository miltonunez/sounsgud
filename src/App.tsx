import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import { SlideRenderer } from './components/SlideRenderer';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Smartphone, RotateCw } from 'lucide-react';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? prev : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? prev : prev - 1));
  }, []);

  // Fullscreen Detection
  useEffect(() => {
    const handleFullscreenChange = () => {
      const doc = document as any;
      const isFull = !!(doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement);
      setIsFullscreen(isFull);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Fullscreen toggle - robust cross-browser implementation
  const toggleFullscreen = async () => {
    try {
      const doc = document as any;
      const docEl = document.documentElement as any;

      const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullscreen || docEl.msRequestFullscreen;
      const exitFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

      if (!requestFullScreen) {
        // Fallback for iOS Safari which doesn't support API on elements but supports standalone mode
        alert("Pantalla completa no soportada en este navegador. Prueba 'Añadir a pantalla de inicio'.");
        return;
      }

      if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        await requestFullScreen.call(docEl);
      } else {
        await exitFullScreen.call(doc);
      }
    } catch (err) {
      console.log("Fullscreen toggle failed:", err);
    }
  };

  const goToStart = useCallback(() => {
    setCurrentIndex(0);
  }, []);

  const currentProgress = ((currentIndex + 1) / SLIDES.length) * 100;

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-950 text-white selection:bg-pink-500 selection:text-white font-sans">

      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-pink-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Header / Top Bar */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-20">
        <div className="text-xl font-display font-bold tracking-widest text-white/50">
          PROPUESTA 2026
        </div>
        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-full hover:bg-white/10 transition text-white/70"
        >
          {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
        </button>
      </div>

      {/* Logo Branding - Bottom Right */}
      <img
        src={`${import.meta.env.BASE_URL}Sounsgud_Logo_Blanco.svg`}
        className="absolute bottom-8 right-8 w-24 md:w-36 z-30 opacity-70 hover:opacity-100 transition-opacity duration-300"
        alt="Soundsgud Records"
      />

      {/* Main Slide Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4 md:p-12 lg:p-20">
        <div className="w-full h-full max-w-7xl mx-auto flex flex-col justify-center">
          {/* Using a key forces remounting for animation on slide change if desired, 
                but for smoother specific logic we keep it stable and just swap data */}
          <div key={currentIndex} className="h-full animate-slide-in flex flex-col">
            <SlideRenderer data={SLIDES[currentIndex]} onReset={goToStart} />
          </div>
        </div>
      </div>

      {/* Side Navigation - Left */}
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-40 p-4 md:p-8 text-white/20 hover:text-white transition-all duration-300 outline-none ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'cursor-pointer hover:scale-110'
          }`}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={40} className="md:w-16 md:h-16 drop-shadow-lg" />
      </button>

      {/* Side Navigation - Right */}
      <button
        onClick={nextSlide}
        disabled={currentIndex === SLIDES.length - 1}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-40 p-4 md:p-8 text-white/20 hover:text-white transition-all duration-300 outline-none ${currentIndex === SLIDES.length - 1 ? 'opacity-0 pointer-events-none' : 'cursor-pointer hover:scale-110'
          }`}
        aria-label="Next Slide"
      >
        <ChevronRight size={40} className="md:w-16 md:h-16 drop-shadow-lg" />
      </button>

      {/* Bottom Progress Bar & Counter */}
      <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col items-center gap-2 pointer-events-none">
        <div className="w-full max-w-xl h-1 bg-white/10 rounded-full overflow-hidden pointer-events-auto backdrop-blur-sm">
          <div
            className="h-full bg-gradient-to-r from-pink-500 to-indigo-500 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(236,72,153,0.5)]"
            style={{ width: `${currentProgress}%` }}
          />
        </div>
        <span className="font-display font-medium text-xs md:text-sm text-white/30 tracking-widest">
          {currentIndex + 1} / {SLIDES.length}
        </span>
      </div>



      {/* Inline styles for custom animations that Tailwind standard doesn't cover perfectly without config */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        @keyframes rotateDevice {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(90deg); }
        }
        .animate-rotate-device {
            animation: rotateDevice 3s ease-in-out infinite;
        }
        .animate-spin-slow {
             animation: spin 3s linear infinite;
        }
        @keyframes spin {
             from { transform: rotate(0deg); }
             to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default App;