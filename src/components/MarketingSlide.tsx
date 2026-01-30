import React from 'react';
import { SlideData } from '../types';
import { Play, Heart, Bell, Zap, Video, Share2, FileText, Globe, Music, Settings, Award, TrendingUp, Users, Copyright, Unlock, PenTool, PieChart, Calendar, Radio, BarChart, Compass, Target, CheckCircle, DollarSign } from 'lucide-react';

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

const MarketingSlide: React.FC<{ data: SlideData }> = ({ data }) => {
    const hoverGlowClass = "hover:shadow-[0_0_25px_rgba(236,72,153,0.3)]";

    return (
        <div className="flex flex-col h-full animate-fade-in text-white">
            {/* Header */}
            <div className="flex flex-row items-end justify-between mb-2 md:mb-4 pb-2 md:pb-3 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-2 md:gap-4">
                    <div className="p-1.5 md:p-2 bg-white/5 rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-sm">
                        <div className="scale-60 md:scale-75 origin-center text-yellow-400">
                            <Zap size={52} />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg md:text-3xl font-display font-bold text-white mb-0.5 md:mb-1">{data.title}</h2>
                        <p className="text-[10px] md:text-sm text-pink-500 font-medium tracking-wider uppercase">{data.subtitle}</p>
                    </div>
                </div>
                <div className="block text-slate-600 font-display text-xl md:text-2xl font-bold opacity-20">0{data.id}</div>
            </div>

            {/* 3 Columns - Stack vertically in portrait mode */}
            <div className="grid grid-cols-1 portrait:grid-cols-1 landscape:grid-cols-3 gap-2 md:gap-4 flex-grow items-end content-center pb-2 md:pb-4 overflow-y-auto">

                {/* Column 1: Smartphone (Vertical) - Producción Audiovisual */}
                <div className="flex flex-col items-center gap-2 md:gap-3 group h-full justify-end">

                    {/* Mockup - Floating Above */}
                    <div className="transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-3 z-10 mb-2 md:mb-4">
                        <div className={`relative w-20 h-36 md:w-28 md:h-52 bg-slate-900 border-2 md:border-4 border-slate-900 rounded-[1rem] md:rounded-[2rem] shadow-2xl overflow-hidden ${hoverGlowClass}`}>
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 md:w-10 h-2 md:h-2.5 bg-slate-800 rounded-b-md md:rounded-b-lg z-20"></div>
                            {/* Screen */}
                            <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-black z-10 flex flex-col justify-between p-1 md:p-2 pt-3 md:pt-4">
                                {/* Simulated Reel Interface */}
                                <div className="flex-grow flex items-center justify-center relative w-full h-full rounded-md md:rounded-lg overflow-hidden bg-white/5">
                                    <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay"></div>
                                    <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse z-20">
                                        <Play size={10} className="w-3 h-3 md:w-3 md:h-3 ml-0.5 text-white" fill="white" />
                                    </div>
                                    {/* Fake UI */}
                                    <div className="absolute right-1 md:right-2 bottom-5 md:bottom-8 flex flex-col gap-1 md:gap-2 items-center">
                                        <div className="flex flex-col items-center gap-0.5">
                                            <Heart size={8} className="w-2 h-2 md:w-3 md:h-3 text-pink-500" fill="#ec4899" />
                                            <div className="text-[4px] md:text-[5px] text-white">4.2k</div>
                                        </div>
                                        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-white/30 overflow-hidden animate-spin-slow">
                                            <div className="w-full h-full bg-gradient-to-tr from-pink-500 to-indigo-500"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Standard Card Content */}
                    <div className="glass-panel p-2 md:p-4 rounded-xl md:rounded-2xl w-full h-auto md:h-48 flex flex-col items-center justify-center text-center transition-all duration-300 transform group-hover:-translate-y-1 group-hover:bg-white/10 border-t-2 border-t-transparent group-hover:border-t-pink-500">
                        <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-indigo-900/30 mb-1.5 md:mb-3 group-hover:bg-indigo-900/50 transition-colors">
                            <div className="scale-75 md:scale-90 origin-center">{getIcon(data.items?.[0].iconName)}</div>
                        </div>
                        <h3 className="text-xs md:text-base font-bold text-white mb-1 leading-tight">{data.items?.[0].title}</h3>
                        <p className="text-slate-300 leading-snug md:leading-relaxed text-[9px] md:text-[11px] hidden md:block">{data.items?.[0].description}</p>
                        <p className="text-slate-300 leading-snug text-[8px] md:hidden block line-clamp-3 overflow-hidden">{data.items?.[0].description}</p>
                    </div>
                </div>

                {/* Column 2: Social Media Card - Campaña Promocional */}
                <div className="flex flex-col items-center gap-2 md:gap-3 group h-full justify-end">

                    {/* Mockup - Floating Above */}
                    <div className="transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-3 z-10 mb-6 md:mb-12">
                        <div className={`relative w-28 h-20 md:w-40 md:h-28 glass-panel rounded-lg md:rounded-xl p-2 md:p-3 flex flex-col justify-between shadow-xl ${hoverGlowClass} border border-white/10 overflow-visible`}>
                            {/* Floating Notification Badge */}
                            <div className="absolute -top-2 -right-2 w-6 h-6 md:w-7 md:h-7 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center border-2 md:border-3 border-slate-900 shadow-lg animate-bounce">
                                <Bell size={10} className="w-3 h-3 text-white" fill="white" />
                            </div>
                            {/* Header */}
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[1px] md:p-[2px]">
                                    <div className="w-full h-full rounded-full bg-black border-[1px] md:border-2 border-transparent"></div>
                                </div>
                                <div>
                                    <div className="h-1 md:h-1 w-10 md:w-12 bg-white/40 rounded mb-0.5"></div>
                                    <div className="h-0.5 md:h-0.5 w-6 md:w-8 bg-white/20 rounded"></div>
                                </div>
                            </div>
                            {/* Body Content */}
                            <div className="bg-white/5 rounded md:rounded-lg w-full h-8 md:h-10 flex flex-col justify-center items-center border border-white/5 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] animate-shimmer"></div>
                                <div className="text-center">
                                    <div className="text-[6px] md:text-[7px] text-indigo-300 font-bold tracking-widest uppercase mb-0.5">New Release</div>
                                    <div className="h-1 md:h-1 w-12 md:w-14 bg-white/20 rounded mx-auto"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Standard Card Content */}
                    <div className="glass-panel p-2 md:p-4 rounded-xl md:rounded-2xl w-full h-auto md:h-48 flex flex-col items-center justify-center text-center transition-all duration-300 transform group-hover:-translate-y-1 group-hover:bg-white/10 border-t-2 border-t-transparent group-hover:border-t-pink-500">
                        <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-indigo-900/30 mb-1.5 md:mb-3 group-hover:bg-indigo-900/50 transition-colors">
                            <div className="scale-75 md:scale-90 origin-center">{getIcon(data.items?.[1].iconName)}</div>
                        </div>
                        <h3 className="text-xs md:text-base font-bold text-white mb-1 leading-tight">{data.items?.[1].title}</h3>
                        <p className="text-slate-300 leading-snug md:leading-relaxed text-[9px] md:text-[11px] hidden md:block">{data.items?.[1].description}</p>
                        <p className="text-slate-300 leading-snug text-[8px] md:hidden block line-clamp-3 overflow-hidden">{data.items?.[1].description}</p>
                    </div>
                </div>

                {/* Column 3: Media Kit - Media Kit */}
                <div className="flex flex-col items-center gap-2 md:gap-3 group h-full justify-end">

                    {/* Mockup - Floating Above */}
                    <div className="transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-3 z-10 mb-2 md:mb-4">
                        {/* Tablet/Doc Mockup */}
                        <div className={`relative w-24 h-32 md:w-32 md:h-44 bg-white/10 rounded-md md:rounded-lg p-[1px] shadow-2xl ${hoverGlowClass}`}>
                            {/* Screen/Paper */}
                            <div className="w-full h-full bg-slate-50 rounded-md md:rounded-lg overflow-hidden relative flex flex-col font-sans">

                                {/* Header / Hero */}
                                <div className="h-10 md:h-14 bg-slate-800 relative w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-90"></div>
                                    {/* Artist Name Placeholder */}
                                    <div className="absolute bottom-0 left-0 w-full p-1.5 md:p-2 bg-gradient-to-t from-black/60 to-transparent">
                                        <div className="h-1.5 md:h-2 w-10 md:w-14 bg-white/90 rounded-sm mb-0.5"></div>
                                        <div className="h-1 md:h-1 w-6 md:w-8 bg-white/60 rounded-sm"></div>
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="p-1.5 md:p-2 flex flex-col gap-1.5 md:gap-2">

                                    {/* Stats Row */}
                                    <div className="flex justify-between items-center bg-white p-1 rounded shadow-sm">
                                        <div className="text-center">
                                            <div className="text-[5px] md:text-[7px] font-bold text-slate-800">2.5M</div>
                                            <div className="text-[3px] md:text-[4px] text-slate-400 font-bold uppercase tracking-wide">Strm</div>
                                        </div>
                                        <div className="w-[0.5px] h-2 bg-slate-100"></div>
                                        <div className="text-center">
                                            <div className="text-[5px] md:text-[7px] font-bold text-slate-800">450k</div>
                                            <div className="text-[3px] md:text-[4px] text-slate-400 font-bold uppercase tracking-wide">Fan</div>
                                        </div>
                                        <div className="w-[0.5px] h-2 bg-slate-100"></div>
                                        <div className="text-center">
                                            <div className="text-[5px] md:text-[7px] font-bold text-green-500">+12%</div>
                                            <div className="text-[3px] md:text-[4px] text-slate-400 font-bold uppercase tracking-wide">Gro</div>
                                        </div>
                                    </div>

                                    {/* Bio Lines */}
                                    <div className="space-y-1">
                                        <div className="h-0.5 md:h-1 w-full bg-slate-300 rounded-full"></div>
                                        <div className="h-0.5 md:h-1 w-full bg-slate-300 rounded-full"></div>
                                        <div className="h-0.5 md:h-1 w-4/6 bg-slate-300 rounded-full"></div>
                                    </div>

                                    {/* Press Layout */}
                                    <div className="grid grid-cols-2 gap-1 mt-0.5">
                                        <div className="aspect-video bg-indigo-100 rounded border border-indigo-200 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-indigo-500/10"></div>
                                        </div>
                                        <div className="aspect-video bg-pink-100 rounded border border-pink-200 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-pink-500/10"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Badges */}
                                <div className="absolute top-1 right-1 flex gap-0.5">
                                    <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white text-[3px] md:text-[4px] font-bold px-1 py-0.5 rounded shadow-md uppercase tracking-wider">EPK</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Standard Card Content */}
                    <div className="glass-panel p-2 md:p-4 rounded-xl md:rounded-2xl w-full h-auto md:h-48 flex flex-col items-center justify-center text-center transition-all duration-300 transform group-hover:-translate-y-1 group-hover:bg-white/10 border-t-2 border-t-transparent group-hover:border-t-pink-500">
                        <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-indigo-900/30 mb-1.5 md:mb-3 group-hover:bg-indigo-900/50 transition-colors">
                            <div className="scale-75 md:scale-90 origin-center">{getIcon(data.items?.[2].iconName)}</div>
                        </div>
                        <h3 className="text-xs md:text-base font-bold text-white mb-1 leading-tight">{data.items?.[2].title}</h3>
                        <p className="text-slate-300 leading-snug md:leading-relaxed text-[9px] md:text-[11px] hidden md:block">{data.items?.[2].description}</p>
                        <p className="text-slate-300 leading-snug text-[8px] md:hidden block line-clamp-3 overflow-hidden">{data.items?.[2].description}</p>
                    </div>
                </div>

            </div>

            {/* Inline styles for custom animations */}
            <style>{`
        @keyframes shimmer {
            100% { transform: translateX(150%) skewX(12deg); }
        }
        .animate-shimmer {
            animation: shimmer 2s infinite;
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

export default MarketingSlide;
