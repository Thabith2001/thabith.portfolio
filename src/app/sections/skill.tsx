import React from 'react';
import SkillsChart from "@/src/components/pie-chart";


const Skills = () => {
    return (
        <section className={`relative min-h-screen overflow-hidden px-6 py-20`} id="skills">
            <div
                className="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-green-600 opacity-[0.08] blur-[80px] pointer-events-none"/>

            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-12">
          <span className="text-3xl font-bold tracking-[0.15em] uppercase text-white">
            Skills

          </span>
                    <div className="flex-1 h-px bg-green-400/40"/>
                </div>
                <SkillsChart/>
            </div>
        </section>
    );
};

export default Skills;
