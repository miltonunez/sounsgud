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

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
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
        src="/Sounsgud_Logo_Blanco.svg"
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

      {/* Navigation Controls */}
      <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col items-center gap-4 pointer-events-none">

        {/* Progress Bar */}
        <div className="w-full max-w-xl h-1 bg-white/10 rounded-full overflow-hidden pointer-events-auto">
          <div
            className="h-full bg-gradient-to-r from-pink-500 to-indigo-500 transition-all duration-500 ease-out"
            style={{ width: `${currentProgress}%` }}
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-6 pointer-events-auto">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`p-4 rounded-full glass-panel transition-all duration-200 group ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/20 hover:scale-110 active:scale-95'
              }`}
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <span className="font-display font-bold text-lg text-white/50 w-16 text-center">
            {currentIndex + 1} / {SLIDES.length}
          </span>

          <button
            onClick={nextSlide}
            disabled={currentIndex === SLIDES.length - 1}
            className={`p-4 rounded-full glass-panel transition-all duration-200 group ${currentIndex === SLIDES.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/20 hover:scale-110 active:scale-95'
              }`}
          >
            <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Rotate Device Overlay */}
      <div className="fixed inset-0 z-[100] bg-slate-950 hidden portrait:flex flex-col items-center justify-center p-8 text-center animate-fade-in">
        <div className="relative mb-8">
          <Smartphone size={64} className="text-white opacity-80 animate-rotate-device" />
          <RotateCw size={32} className="absolute -top-4 -right-4 text-pink-500 animate-spin-slow" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Experiencia Mejorada</h2>
        <p className="text-indigo-200 text-lg leading-relaxed">
          Para vivir la experiencia <span className="font-bold text-white">Sounsgud</span>,<br />
          por favor gira tu dispositivo.
        </p>
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