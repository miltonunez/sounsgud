import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const dataGross = [
  { name: 'Symphonic', value: 15, color: '#64748b' }, // Slate-500
  { name: 'Proyecto', value: 85, color: '#4f46e5' }, // Indigo-600
];

const dataMain = [
  { name: 'Symphonic', value: 15, color: '#94a3b8' }, // Slate-400
  { name: 'Sounsgud', value: 21.25, color: '#8b5cf6' }, // Violet-500
  { name: 'Tú', value: 63.75, color: '#ec4899' }, // Pink-500
];

const dataNet = [
  { name: 'Tú', value: 75, color: '#ec4899' }, // Pink-500
  { name: 'Sounsgud', value: 25, color: '#8b5cf6' }, // Violet-500
];

const FinancialChart: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col landscape:flex-row items-center justify-between gap-1 md:gap-4 py-1 md:py-4 overflow-y-auto landscape:overflow-visible">

      {/* Chart 1: Distribution Cost (Left, Smaller) */}
      <div className="w-full landscape:flex-[var(--chart-flex-side)] flex flex-col items-center opacity-80 transition hover:opacity-100 min-w-0">
        <h3 className="text-[10px] md:text-xs font-display font-bold mb-1 md:mb-2 text-center text-slate-400 uppercase tracking-wider">Ingresos Brutos</h3>
        <div className="h-20 landscape:h-24 md:h-32 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataGross}
                cx="50%"
                cy="50%"
                innerRadius={25}
                outerRadius={40}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {dataGross.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '10px', padding: '4px' }}
                itemStyle={{ color: '#fff' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="text-center mt-1 text-[10px] text-slate-500">
          85% Proyecto / 15% Symphonic
        </div>
      </div>

      {/* Chart 2: Main Structure (Center, Large) */}
      <div className="w-full landscape:flex-[var(--chart-flex-main)] flex flex-col items-center relative z-10 min-w-0 p-3 bg-white/5 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
        <h3 className="text-base landscape:text-sm md:text-xl font-display font-bold mb-1 md:mb-4 text-center text-white drop-shadow-lg">ESTRUCTURA DE ALIANZA</h3>
        <div className="w-[128px] h-[128px] relative flex items-center justify-center">
          {/* Decorative Ring */}
          <div className="absolute inset-0 rounded-full border border-indigo-500/10 animate-pulse scale-90"></div>

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataMain}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                paddingAngle={3}
                dataKey="value"
                stroke="none"
                startAngle={90}
                endAngle={-270}
              >
                {dataMain.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    className="drop-shadow-[0_0_10px_rgba(99,102,241,0.3)]"
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #6366f1', borderRadius: '12px', color: '#fff', padding: '8px', fontSize: '12px' }}
                itemStyle={{ color: '#fff', fontWeight: 'bold' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Custom Legend to ensure correct order */}
        <div className="flex flex-row flex-nowrap justify-center gap-3 mt-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-[#ec4899] shrink-0"></div>
            <span className="text-[9px] text-slate-300 font-medium whitespace-nowrap">Tú (63.75%)</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-[#8b5cf6] shrink-0"></div>
            <span className="text-[9px] text-slate-300 font-medium whitespace-nowrap">Sounsgud (21.25%)</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-[#94a3b8] shrink-0"></div>
            <span className="text-[9px] text-slate-300 font-medium whitespace-nowrap">Symphonic (15%)</span>
          </div>
        </div>
      </div>

      {/* Chart 3: Net Split (Right, Smaller) */}
      <div className="w-full landscape:flex-[var(--chart-flex-side)] flex flex-col items-center opacity-80 transition hover:opacity-100 min-w-0">
        <h3 className="text-[10px] md:text-xs font-display font-bold mb-1 md:mb-2 text-center text-slate-400 uppercase tracking-wider">División Remanente</h3>
        <div className="h-20 landscape:h-24 md:h-32 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataNet}
                cx="50%"
                cy="50%"
                innerRadius={25}
                outerRadius={40}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {dataNet.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '10px', padding: '4px' }}
                itemStyle={{ color: '#fff' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="text-center mt-1 text-[10px] text-slate-500">
          75% Tú / 25% Sounsgud
        </div>
      </div>

    </div>
  );
};

export default FinancialChart;