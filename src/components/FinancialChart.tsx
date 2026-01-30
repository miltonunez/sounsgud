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
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between gap-4 py-4">

      {/* Chart 1: Distribution Cost (Left, Smaller) */}
      <div className="w-full lg:w-1/4 flex flex-col items-center opacity-80 scale-90 transition hover:scale-100 hover:opacity-100">
        <h3 className="text-sm font-display font-bold mb-2 text-center text-slate-400 uppercase tracking-wider">Ingresos Brutos</h3>
        <div className="h-32 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataGross}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={45}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {dataGross.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                itemStyle={{ color: '#fff' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="text-center mt-1 text-xs text-slate-500">
          85% Proyecto / 15% Symphonic
        </div>
      </div>

      {/* Chart 2: Main Structure (Center, Large) */}
      <div className="w-full lg:w-1/2 flex flex-col items-center relative z-10">
        <h3 className="text-2xl font-display font-bold mb-6 text-center text-white drop-shadow-lg">ESTRUCTURA DE ALIANZA</h3>
        <div className="h-64 w-full md:h-80 relative">
          {/* Decorative Ring */}
          <div className="absolute inset-0 rounded-full border border-indigo-500/10 animate-pulse scale-90"></div>

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataMain}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={110}
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
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #6366f1', borderRadius: '12px', color: '#fff', padding: '12px' }}
                itemStyle={{ color: '#fff', fontWeight: 'bold' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Custom Legend to ensure correct order */}
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ec4899]"></div>
            <span className="text-sm text-slate-300 font-medium">Tú (63.75%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#8b5cf6]"></div>
            <span className="text-sm text-slate-300 font-medium">Sounsgud (21.25%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#94a3b8]"></div>
            <span className="text-sm text-slate-300 font-medium">Symphonic (15%)</span>
          </div>
        </div>
      </div>

      {/* Chart 3: Net Split (Right, Smaller) */}
      <div className="w-full lg:w-1/4 flex flex-col items-center opacity-80 scale-90 transition hover:scale-100 hover:opacity-100">
        <h3 className="text-sm font-display font-bold mb-2 text-center text-slate-400 uppercase tracking-wider">División Remanente</h3>
        <div className="h-32 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataNet}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={45}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {dataNet.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                itemStyle={{ color: '#fff' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="text-center mt-1 text-xs text-slate-500">
          75% Tú / 25% Sounsgud
        </div>
      </div>

    </div>
  );
};

export default FinancialChart;