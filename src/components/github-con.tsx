'use client';

import dynamic from 'next/dynamic';

const GitHubCalendar = dynamic(
    async () => {
        const mod = await import('react-github-calendar');
        return mod.GitHubCalendar;
    },
    {
        ssr: false,
    }
);

const GithubSection = () => {
    return (
        <section
            id="github"
            className="relative py-24 px-6 overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-100 h-100 bg-green-500/10 blur-[120px] rounded-full" />

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-14">
                    <p className="text-green-400 uppercase tracking-[0.25em] text-sm">
                        Open Source
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                        GitHub Contributions
                    </h2>

                    <p className="text-[#a3a39d] mt-5 max-w-2xl mx-auto leading-relaxed">
                        A visual overview of my coding activity,
                        open-source contributions, and consistency on GitHub.
                    </p>
                </div>

                {/* Contribution Graph */}
                <div className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-10 overflow-x-auto">
                    <GitHubCalendar
                        username="Thabith2001"
                        colorScheme="dark"
                        fontSize={14}
                        blockSize={15}
                        blockMargin={5}
                    />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

                    {/* GitHub Stats */}
                    <div className="border border-white/10 bg-white/5 rounded-3xl p-4 overflow-hidden">
                        <img
                            src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Thabith2001&theme=github_dark"
                            alt="GitHub Summary"
                            className="w-full h-full text-[#a3a39d]"
                        />
                    </div>

                    {/* GitHub Streak */}
                    <div className="border border-white/10 bg-white/5 rounded-3xl p-4 overflow-hidden">
                        <img
                            src="https://github-readme-streak-stats.herokuapp.com/?user=Thabith2001&theme=transparent&hide_border=true"
                            alt="GitHub Streak"
                            className="w-full h-fit text-[#a3a39d]"
                        />
                    </div>
                </div>

                {/* Button */}
                <div className="flex justify-center mt-12">
                    <a
                        href="https://github.com/Thabith2001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-green-400 text-black font-semibold hover:scale-105 hover:bg-green-300 transition duration-300"
                    >
                        Visit GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GithubSection;