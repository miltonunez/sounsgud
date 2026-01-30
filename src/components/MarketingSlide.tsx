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
    // Shared pink glow for all mockups
    const hoverGlowClass = "hover:shadow-[0_0_25px_rgba(236,72,153,0.3)]";

    return (
        <div className="flex flex-col h-full animate-fade-in text-white">
            {/* Header */}
            <div className="flex flex-row items-end justify-between mb-8 pb-4 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-6">
                    <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-sm">
                        <div className="text-yellow-400"><Zap size={52} /></div>
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">{data.title}</h2>
                        <p className="text-sm md:text-lg text-pink-500 font-medium tracking-wider uppercase">{data.subtitle}</p>
                    </div>
                </div>
                <div className="block text-slate-600 font-display text-4xl font-bold opacity-20">0{data.id}</div>
            </div>

            {/* 3 Columns */}
            <div className="grid grid-cols-3 gap-6 flex-grow items-end content-center pb-4">

                {/* Column 1: Smartphone (Vertical) - Producción Audiovisual */}
                <div className="flex flex-col items-center gap-4 group h-full justify-end">

                    {/* Mockup - Floating Above */}
                    <div className="transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-4 z-10 mb-6">
                        <div className={`relative w-40 h-72 bg-slate-900 border-4 border-slate-900 rounded-[2rem] shadow-2xl overflow-hidden ${hoverGlowClass}`}>
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-800 rounded-b-xl z-20"></div>
                            {/* Screen */}
                            <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-black z-10 flex flex-col justify-between p-2 pt-6">
                                {/* Simulated Reel Interface */}
                                <div className="flex-grow flex items-center justify-center relative w-full h-full rounded-lg overflow-hidden bg-white/5">
                                    <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay"></div>
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse z-20">
                                        <Play size={16} fill="white" className="ml-0.5 text-white" />
                                    </div>
                                    {/* Fake UI */}
                                    <div className="absolute right-2 bottom-10 flex flex-col gap-3 items-center">
                                        <div className="flex flex-col items-center gap-0.5">
                                            <Heart size={14} className="text-pink-500" fill="#ec4899" />
                                            <div className="text-[6px] text-white">4.2k</div>
                                        </div>
                                        <div className="w-5 h-5 rounded-full border border-white/30 overflow-hidden animate-spin-slow">
                                            <div className="w-full h-full bg-gradient-to-tr from-pink-500 to-indigo-500"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Standard Card Content */}
                    <div className="glass-panel p-6 rounded-2xl w-full h-64 flex flex-col items-center justify-center text-center transition-all duration-300 transform group-hover:-translate-y-1 group-hover:bg-white/10 border-t-2 border-t-transparent group-hover:border-t-pink-500">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-900/30 mb-4 group-hover:bg-indigo-900/50 transition-colors">
                            {getIcon(data.items?.[0].iconName)}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{data.items?.[0].title}</h3>
                        <p className="text-slate-300 leading-relaxed text-sm">{data.items?.[0].description}</p>
                    </div>
                </div>

                {/* Column 2: Social Media Card - Campaña Promocional */}
                <div className="flex flex-col items-center gap-4 group h-full justify-end">

                    {/* Mockup - Floating Above */}
                    <div className="transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-4 z-10 mb-16">
                        <div className={`relative w-56 h-40 glass-panel rounded-xl p-4 flex flex-col justify-between shadow-xl ${hoverGlowClass} border border-white/10 overflow-visible`}>
                            {/* Floating Notification Badge */}
                            <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center border-4 border-slate-900 shadow-lg animate-bounce">
                                <Bell size={16} fill="white" className="text-white" />
                            </div>
                            {/* Header */}
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[2px]">
                                    <div className="w-full h-full rounded-full bg-black border-2 border-transparent"></div>
                                </div>
                                <div>
                                    <div className="h-1.5 w-16 bg-white/40 rounded mb-1"></div>
                                    <div className="h-1 w-10 bg-white/20 rounded"></div>
                                </div>
                            </div>
                            {/* Body Content */}
                            <div className="bg-white/5 rounded-lg w-full h-16 flex flex-col justify-center items-center border border-white/5 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] animate-shimmer"></div>
                                <div className="text-center">
                                    <div className="text-[10px] text-indigo-300 font-bold tracking-widest uppercase mb-1">New Release</div>
                                    <div className="h-1.5 w-20 bg-white/20 rounded mx-auto"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Standard Card Content */}
                    <div className="glass-panel p-6 rounded-2xl w-full h-64 flex flex-col items-center justify-center text-center transition-all duration-300 transform group-hover:-translate-y-1 group-hover:bg-white/10 border-t-2 border-t-transparent group-hover:border-t-pink-500">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-900/30 mb-4 group-hover:bg-indigo-900/50 transition-colors">
                            {getIcon(data.items?.[1].iconName)}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{data.items?.[1].title}</h3>
                        <p className="text-slate-300 leading-relaxed text-sm">{data.items?.[1].description}</p>
                    </div>
                </div>

                {/* Column 3: Media Kit - Media Kit */}
                <div className="flex flex-col items-center gap-4 group h-full justify-end">

                    {/* Mockup - Floating Above */}
                    <div className="transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-4 z-10 mb-6">
                        {/* Tablet/Doc Mockup */}
                        <div className={`relative w-48 h-64 bg-white/10 rounded-lg p-[1px] shadow-2xl ${hoverGlowClass}`}>
                            {/* Screen/Paper */}
                            <div className="w-full h-full bg-slate-50 rounded-lg overflow-hidden relative flex flex-col font-sans">

                                {/* Header / Hero */}
                                <div className="h-24 bg-slate-800 relative w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-90"></div>
                                    {/* Artist Name Placeholder */}
                                    <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/60 to-transparent">
                                        <div className="h-3 w-20 bg-white/90 rounded-sm mb-1"></div>
                                        <div className="h-1.5 w-12 bg-white/60 rounded-sm"></div>
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="p-3 flex flex-col gap-4">

                                    {/* Stats Row (Crucial for Media Kits) */}
                                    <div className="flex justify-between items-center bg-white p-2 rounded-lg shadow-sm">
                                        <div className="text-center">
                                            <div className="text-[10px] font-bold text-slate-800">2.5M</div>
                                            <div className="text-[5px] text-slate-400 font-bold uppercase tracking-wide">Streams</div>
                                        </div>
                                        <div className="w-[1px] h-4 bg-slate-100"></div>
                                        <div className="text-center">
                                            <div className="text-[10px] font-bold text-slate-800">450k</div>
                                            <div className="text-[5px] text-slate-400 font-bold uppercase tracking-wide">Fans</div>
                                        </div>
                                        <div className="w-[1px] h-4 bg-slate-100"></div>
                                        <div className="text-center">
                                            <div className="text-[10px] font-bold text-green-500">+12%</div>
                                            <div className="text-[5px] text-slate-400 font-bold uppercase tracking-wide">Growth</div>
                                        </div>
                                    </div>

                                    {/* Bio Lines */}
                                    <div className="space-y-1.5">
                                        <div className="h-1.5 w-full bg-slate-300 rounded-full"></div>
                                        <div className="h-1.5 w-full bg-slate-300 rounded-full"></div>
                                        <div className="h-1.5 w-4/6 bg-slate-300 rounded-full"></div>
                                    </div>

                                    {/* Press Layout */}
                                    <div className="grid grid-cols-2 gap-2 mt-1">
                                        <div className="aspect-video bg-indigo-100 rounded border border-indigo-200 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-indigo-500/10"></div>
                                            <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-indigo-400/50"></div>
                                        </div>
                                        <div className="aspect-video bg-pink-100 rounded border border-pink-200 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-pink-500/10"></div>
                                            <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-pink-400/50"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Badges */}
                                <div className="absolute top-2 right-2 flex gap-1">
                                    <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white text-[6px] font-bold px-1.5 py-0.5 rounded shadow-md uppercase tracking-wider">EPK</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Standard Card Content */}
                    <div className="glass-panel p-6 rounded-2xl w-full h-64 flex flex-col items-center justify-center text-center transition-all duration-300 transform group-hover:-translate-y-1 group-hover:bg-white/10 border-t-2 border-t-transparent group-hover:border-t-pink-500">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-900/30 mb-4 group-hover:bg-indigo-900/50 transition-colors">
                            {getIcon(data.items?.[2].iconName)}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{data.items?.[2].title}</h3>
                        <p className="text-slate-300 leading-relaxed text-sm">{data.items?.[2].description}</p>
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
