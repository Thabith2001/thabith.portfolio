'use client';

import { AiOutlineArrowUp } from 'react-icons/ai';
import { social } from '@/src/data/data-exp';

const Footer = () => {
    return (
        <footer className="relative bg-black/30 border-t border-white/10 mt-20">

            {/* Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-green-500/10 blur-[120px] rounded-full" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">

                {/* Top */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">

                    {/* Logo */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-white">
                            Thabith
                            <span className="text-green-400">.</span>
                        </h2>

                        <p className="text-sm text-[#a3a39d] mt-2 max-w-md">
                            Full Stack Software Engineer building
                            modern and scalable web applications.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        {social
                            .filter(
                                ({ text }) =>
                                    text !== 'Colombo, Sri Lanka' &&
                                    text !== 'Email' &&
                                    text !== '+94 76 655 3936'
                            )
                            .map(({ link, icon: Icon, text }) => (
                                <a
                                    key={text}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        w-11 h-11 rounded-xl
                                        bg-white/5 border border-white/10
                                        flex items-center justify-center
                                        text-[#a3a39d]
                                        hover:text-green-400
                                        hover:border-green-400/30
                                        transition duration-300
                                    "
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">

                    <p className="text-sm text-[#a3a39d] text-center">
                        © {new Date().getFullYear()} Mohamed Thabith Shahul Hameed
                    </p>

                    <a
                        href="#hero"
                        className="
                            flex items-center gap-2
                            text-sm text-[#a3a39d]
                            hover:text-green-400
                            transition duration-300
                        "
                    >
                        Back to top

                        <span className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                            <AiOutlineArrowUp size={14} />
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;