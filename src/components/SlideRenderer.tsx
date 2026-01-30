import React from 'react';
import { createPortal } from 'react-dom';
import { SlideData, SlideType } from '../types';
import FinancialChart from './FinancialChart';
import MarketingSlide from './MarketingSlide';
import {
  Music, Globe, Settings,
  Award, TrendingUp, Users,
  Copyright, Unlock, PenTool,
  Rocket, Zap, PieChart,
  Calendar, Radio, BarChart,
  Video, Share2, FileText,
  Compass, Target, CheckCircle,
  DollarSign,
  HeartHandshake,
  ShieldCheck
} from 'lucide-react';

interface SlideProps {
  data: SlideData;
}

// Map for Title Icons (Colored Header Icons)
const TitleIconMap: Record<number, React.ReactNode> = {
  2: <HeartHandshake size={52} className="text-pink-500" />,
  3: <Globe size={52} className="text-blue-500" />,
  4: <ShieldCheck size={52} className="text-green-500" />,
  6: <Rocket size={52} className="text-orange-500" />,
  7: <Zap size={52} className="text-yellow-400" />,
  8: <Music size={52} className="text-indigo-500" />,
};

const getIcon = (iconName?: string) => {
  if (!iconName) return null;
  const props = { size: 40, className: "text-indigo-400 group-hover:text-pink-400 transition-colors duration-300" };

  switch (iconName) {
    case 'Award': return <Award {...props} />;
    case 'TrendingUp': return <TrendingUp {...props} />;
    case 'Users': return <Users {...props} />;
    case 'Globe': return <Globe {...props} />;
    case 'Music': return <Music {...props} />;
    case 'Settings': return <Settings {...props} />;
    case 'Copyright': return <Copyright {...props} />;
    case 'Unlock': return <Unlock {...props} />;
    case 'PenTool': return <PenTool {...props} />;
    case 'PieChart': return <PieChart {...props} />;
    case 'Calendar': return <Calendar {...props} />;
    case 'Radio': return <Radio {...props} />;
    case 'BarChart': return <BarChart {...props} />;
    case 'Video': return <Video {...props} />;
    case 'Share2': return <Share2 {...props} />;
    case 'FileText': return <FileText {...props} />;
    case 'Compass': return <Compass {...props} />;
    case 'Target': return <Target {...props} />;
    case 'CheckCircle': return <CheckCircle {...props} className="text-green-400 mb-4" />;
    case 'DollarSign': return <DollarSign {...props} />;
    default: return <Zap {...props} />;
  }
};

export const SlideRenderer: React.FC<{ data: SlideData; onReset?: () => void }> = ({ data, onReset }) => {

  // 1. Cover Slide
  if (data.type === SlideType.COVER) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-fade-in-up relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 -z-10 rounded-3xl" />
        <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-indigo-500 mb-4" />
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white uppercase drop-shadow-2xl max-w-5xl whitespace-pre-line leading-tight">
          {data.title}
        </h1>
        <p className="text-2xl md:text-3xl text-indigo-200 font-light tracking-widest uppercase">
          {data.subtitle}
        </p>
        <div className="mt-12 py-3 px-8 rounded-full border border-white/20 text-sm uppercase tracking-widest text-white/60 font-light">
          {data.highlight}
        </div>
      </div>
    );
  }

  // 2. Financial Slide
  if (data.type === SlideType.FINANCIAL) {
    return (
      <div className="flex flex-col h-full animate-fade-in">
        <div className="flex flex-row items-end justify-between mb-2 md:mb-4 pb-2 md:pb-3 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="p-1.5 md:p-2 bg-white/5 rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-sm">
              <div className="scale-60 md:scale-75 origin-center text-green-500">
                <DollarSign size={52} />
              </div>
            </div>
            <div>
              <h2 className="text-lg md:text-3xl font-display font-bold text-white mb-0.5 md:mb-1">{data.title}</h2>
              <p className="text-[10px] md:text-sm text-pink-500 font-medium tracking-wider uppercase">{data.subtitle}</p>
            </div>
          </div>
          {data.id > 1 && <div className="block text-xl md:text-2xl text-slate-600 font-display font-bold opacity-20">0{data.id}</div>}
        </div>

        <div className="flex-grow glass-panel rounded-2xl p-2 md:p-4 flex flex-col justify-start gap-2 overflow-hidden">
          <div className="w-full h-full min-h-0">
            <FinancialChart />
          </div>
          {data.items?.[0] && (
            <div className="text-center absolute bottom-4 left-0 right-0 pointer-events-none opacity-50">
              <p className="text-indigo-200/70 text-[10px] italic">{data.items[0].description}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 3. Closing Slide with Interaction
  if (data.type === SlideType.CLOSING) {
    const [showThankYou, setShowThankYou] = React.useState(false);

    if (showThankYou) return createPortal(
      <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-display font-bold text-white tracking-widest uppercase animate-pulse">
          Gracias
        </h1>
        <button
          onClick={() => {
            setShowThankYou(false);
            onReset && onReset();
          }}
          className="mt-12 text-sm uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors duration-500 hover:scale-105 transform cursor-pointer"
        >
          Volver al inicio
        </button>
      </div>,
      document.body
    );


    return (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-4 md:space-y-8 animate-fade-in">
        <div className="mb-2">
          <h2 className="text-2xl md:text-5xl font-display font-bold text-white mb-1">
            {data.title}
          </h2>
          <p className="text-xs md:text-lg text-pink-500 font-bold uppercase tracking-[0.2em]">{data.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 portrait:grid-cols-1 landscape:grid-cols-3 gap-3 md:gap-6 w-full max-w-5xl overflow-y-auto max-h-[60vh] md:max-h-none p-2">
          {data.items?.map((item, idx) => (
            <div key={idx} className="glass-panel p-4 md:p-6 rounded-xl flex flex-col items-center justify-center transform transition duration-500 hover:scale-105 hover:bg-white/10 group border-t-2 border-t-transparent hover:border-t-pink-500">
              <div className="mb-2 md:mb-4">
                {getIcon(item.iconName)}
              </div>
              <h3 className="text-sm md:text-xl font-bold uppercase text-white group-hover:text-indigo-300 transition-colors">{item.title}</h3>
              {item.description && <p className="text-[10px] md:text-sm text-slate-400 mt-1 md:mt-2 line-clamp-3 md:line-clamp-none">{item.description}</p>}
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowThankYou(true)}
          className="mt-4 md:mt-8 bg-white text-black px-8 py-3 md:px-12 md:py-5 rounded-full font-bold text-base md:text-xl hover:bg-indigo-50 transition shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] cursor-pointer"
        >
          Comenzar Ahora
        </button>
      </div>
    )
  }

  // 4. Marketing Slide (Specialized)
  if (data.id === 7) {
    return <MarketingSlide data={data} />;
  }

  // 4. Standard Content Slide
  return (
    <div className="flex flex-col h-full animate-fade-in">
      <div className="flex flex-row items-end justify-between mb-2 md:mb-4 pb-2 md:pb-3 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-2 md:gap-4">
          {/* Title Icon Restored */}
          {TitleIconMap[data.id] && (
            <div className="p-1.5 md:p-2 bg-white/5 rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-sm">
              <div className="scale-60 md:scale-75 origin-center">{TitleIconMap[data.id]}</div>
            </div>
          )}
          <div>
            <h2 className="text-lg md:text-3xl font-display font-bold text-white mb-0.5 md:mb-1">{data.title}</h2>
            <p className="text-[10px] md:text-sm text-pink-500 font-medium tracking-wider uppercase">{data.subtitle}</p>
          </div>
        </div>
        {data.id > 1 && <div className="block text-slate-600 font-display text-xl md:text-2xl font-bold opacity-20">0{data.id}</div>}
      </div>

      <div className="grid grid-cols-1 portrait:grid-cols-1 landscape:grid-cols-3 gap-2 md:gap-4 flex-grow items-start content-center pb-2 md:pb-4 overflow-y-auto">
        {data.items?.map((item, idx) => (
          <div
            key={idx}
            className="glass-panel p-2 md:p-4 rounded-xl md:rounded-2xl h-full flex flex-col items-center text-center transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 border-t-2 border-t-transparent hover:border-t-pink-500 group"
          >
            <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-indigo-900/30 mb-1.5 md:mb-3 group-hover:bg-indigo-900/50 transition-colors">
              <div className="scale-75 md:scale-90 origin-center">{getIcon(item.iconName)}</div>
            </div>
            <h3 className="text-xs md:text-base font-bold text-white mb-1 leading-tight">{item.title}</h3>
            {item.align === 'left' && item.description.includes('•') ? (
              <div className="w-full">
                <p className="text-slate-300 leading-snug md:leading-relaxed text-[9px] md:text-xs text-center mb-1 line-clamp-2 md:line-clamp-none">{item.description.split('\n')[0]}</p>
                <div className="text-slate-300 leading-snug md:leading-relaxed text-[9px] md:text-xs text-left pl-2 md:pl-4 hidden md:block">
                  {item.description.split('\n').slice(1).map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
                <div className="text-slate-300 leading-snug text-[8px] md:text-[9px] text-left pl-2 md:hidden block line-clamp-4">
                  {item.description.replace('\n', ' ')}
                </div>
              </div>
            ) : (
              <p className="text-slate-300 leading-snug md:leading-relaxed text-[9px] md:text-xs whitespace-pre-line line-clamp-5 md:line-clamp-none">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};