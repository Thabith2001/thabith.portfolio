'use client';

import { useState } from 'react';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';
import { datasets,COLORS } from '@/src/data/data-exp';

const SkillsChart = () => {
    const [activeTab, setActiveTab] =
        useState('blueprint');

    const current =
        datasets[activeTab as keyof typeof datasets];

    return (
        <section
            id="skills"
            className="relative py-28 px-6 overflow-hidden"
        >
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-green-500/10 blur-[140px] rounded-full" />

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-green-400 uppercase tracking-[0.3em] text-sm">
                        Engineering Insights
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                        Skills Intelligence
                    </h2>

                    <p className="text-[#a3a39d] mt-5 max-w-3xl mx-auto leading-relaxed">
                        Interactive visualizations representing
                        my engineering strengths, workflow,
                        and technical specialization across
                        modern software development.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {Object.entries(datasets).map(
                        ([key, item]) => (
                            <button
                                key={key}
                                onClick={() =>
                                    setActiveTab(key)
                                }
                                className={`px-5 py-3 rounded-2xl border transition-all duration-300 text-sm md:text-base ${
                                    activeTab === key
                                        ? 'bg-green-400 text-black border-green-400 font-semibold'
                                        : 'bg-white/5 border-white/10 text-gray-300 hover:border-green-400/40 hover:text-green-400'
                                }`}
                            >
                                {item.title}
                            </button>
                        )
                    )}
                </div>

                {/* Main Card */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center rounded-3xl border border-white/10 bg-white/4 backdrop-blur-2xl p-8 md:p-12">

                    {/* Left */}
                    <div>
                        <p className="text-green-400 uppercase tracking-[0.25em] text-xs mb-3">
                            {current.subtitle}
                        </p>

                        <h3 className="text-3xl font-bold text-white mb-6">
                            {current.title}
                        </h3>

                        <div className="space-y-4">
                            {current.data.map(
                                (item, index) => (
                                    <div
                                        key={item.name}
                                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="w-4 h-4 rounded-full"
                                                style={{
                                                    backgroundColor:
                                                        COLORS[
                                                        index %
                                                        COLORS.length
                                                            ],
                                                }}
                                            />

                                            <div>
                                                <p className="text-white font-medium">
                                                    {
                                                        item.name
                                                    }
                                                </p>

                                                <p className="text-sm text-[#a3a39d]">
                                                    Technical
                                                    Category
                                                </p>
                                            </div>
                                        </div>

                                        <span className="text-green-400 font-bold text-lg">
                                            {item.value}%
                                        </span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Right */}
                    <div className="relative w-full h-100 lg:mt-24">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={current.data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius="60%"
                                    outerRadius="100%"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {current.data.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>

                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Center Text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <p className="text-green-400 text-xs uppercase tracking-[0.2em]">
                                Engineering
                            </p>

                            <h4 className="text-white text-lg sm:text-2xl lg:text-3xl font-bold mt-2">
                                Focus
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsChart;