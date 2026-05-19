import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import {FaGithub, FaLinkedin} from "react-icons/fa";

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen overflow-hidden flex items-center justify-center px-6"
        >
            {/* Background */}
            <div className="absolute inset-0 ]" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[60px_60px] opacity-30" />

            {/* Glow Effects */}
            <div className="absolute -top-30 -left-20 w-87.5 h-87.5 bg-green-500/20 blur-[140px] rounded-full" />

            <div className="absolute -bottom-30 -right-20 w-87.5 h-87.5 bg-emerald-400/10 blur-[140px] rounded-full" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto text-center">
                {/* Heading */}
                <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-[9rem] font-black tracking-tight leading-none text-white">
                    THABITH
                    <span className="block text-transparent bg-clip-text bg-linear-to-r from-green-300 via-green-400 to-emerald-500">
            DEVELOPER
          </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-8 max-w-2xl mx-auto text-[#b3b3b3] text-lg md:text-xl leading-relaxed">
                    Full Stack Developer crafting modern web experiences with
                    performance-focused architecture, clean UI, and scalable solutions.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#projects"
                        className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-green-400 text-black font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/20"
                    >
                        View Projects
                        <ArrowRight
                            size={18}
                            className="group-hover:translate-x-1 transition"
                        />
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all duration-300"
                    >
                        Contact Me
                    </a>
                </div>

                {/* Social Links */}
                <div className="mt-12 flex items-center justify-center gap-5">
                    <a
                        href="https://github.com/thabith2001"
                        className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-green-400 hover:border-green-400/40 transition"
                    >
                        <FaGithub size={20} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/thabithshahulhameed/"
                        className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-green-400 hover:border-green-400/40 transition"
                    >
                        <FaLinkedin size={20} />
                    </a>

                    <a
                        href="mailto:shahulhameed.thabith@gmail.com"
                        className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-green-400 hover:border-green-400/40 transition"
                    >
                        <Mail size={20} />
                    </a>
                </div>


            </div>
        </section>
    );
};

export default Hero;