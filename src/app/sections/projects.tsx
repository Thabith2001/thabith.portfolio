"use client";
import { ExternalLink, Star, GitFork, Eye } from "lucide-react";
import {IoLogoGithub} from "react-icons/io5";
import GithubSection from "@/src/components/github-con";
import {projects} from "@/src/data/data-exp";


export default function Projects() {
    return (
        <section id="projects" className="relative min-h-screen overflow-hidden px-6 py-20">
            {/* Ambient glow */}
            <div className="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-green-600 opacity-[0.08] blur-[80px] pointer-events-none" />

            <div className="max-w-5xl mx-auto">
                {/* Section header */}
                <div className="flex items-center gap-3 mb-12">
          <span className="text-3xl font-bold tracking-[0.15em] uppercase text-white">
            Projects
          </span>
                    <div className="flex-1 h-px bg-green-400/40" />
                </div>

                {/* Project cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                    {projects.map(
                        ({
                             name,
                             icon: Icon,
                             github,
                             live,
                             desc,
                             tags,
                             stars,
                             forks,
                             views,
                         }) => (
                            <div
                                key={name}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:border-green-400/40 hover:-translate-y-1"
                            >
                                {/* Glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                                    <div className="absolute -top-20 -right-20 w-60 h-60 bg-green-500/10 blur-[100px] rounded-full" />
                                </div>

                                {/* Header */}
                                <div className="relative z-10 flex items-start justify-between">
                                    {/* Icon */}
                                    <div className="w-12 h-12 rounded-xl bg-green-400/10 border border-green-400/20 flex items-center justify-center text-green-400 text-xl">
                                        {Icon && <Icon />}
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center gap-3">
                                        <a
                                            href={github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-400/30 transition"
                                        >
                                            <IoLogoGithub size={17} />
                                        </a>

                                        <a
                                            href={live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-400/30 transition"
                                        >
                                            <ExternalLink size={17} />
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-semibold text-white mb-3">
                                        {name}
                                    </h3>

                                    <p className="text-sm leading-relaxed text-[#a3a39d]">
                                        {desc}
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="relative z-10 flex flex-wrap gap-2">
                                    {tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[11px] px-3 py-1 rounded-full border border-green-400/15 bg-green-400/5 text-green-400"
                                        >
                        {tag}
                    </span>
                                    ))}
                                </div>

                                {/* Footer Stats */}
                                <div className="relative z-10 flex items-center gap-5 pt-4 mt-auto border-t border-white/5 text-sm">
                <span className="flex items-center gap-1 text-green-400">
                    <Star size={14} />
                    {stars}
                </span>

                                    <span className="flex items-center gap-1 text-green-400">
                    <GitFork size={14} />
                                        {forks}
                </span>

                                    <span className="flex items-center gap-1 text-green-400">
                    <Eye size={14} />
                                        {views}
                </span>
                                </div>
                            </div>
                        )
                    )}
                </div>

                {/* GitHub contribution graph */}
                <GithubSection/>

            </div>
        </section>
    );
}