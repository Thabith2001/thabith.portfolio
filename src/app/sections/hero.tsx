import React from 'react';

const Hero = () => {
    return (
        <section
            id="hero"
            className="flex items-center justify-center min-h-screen px-6"
        >
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-400/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 text-center max-w-5xl mx-auto">

                <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-9xl font-bold text-white leading-tight">
                    Welcome to
                    <span className="block text-green-400">
                        My Portfolio
                    </span>
                </h1>

                <p className="mt-6 text-[#a3a39d] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Full Stack Developer focused on building modern,
                    responsive, and scalable web applications with clean UI
                    and optimized performance.
                </p>

                <div className="mt-10">
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-green-400 text-black font-bold hover:scale-105 hover:bg-green-300 transition duration-300"
                    >
                        View Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;