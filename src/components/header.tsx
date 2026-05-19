'use client';

import React, {useEffect, useState} from 'react';
import {Menu, X} from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setActive] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);




    const navLinks = [
        {name: 'Home', href: '#hero'},
        {name: 'About', href: '#about'},
        {name: 'Projects', href: '#projects'},
        {name: 'Skills', href: '#skills'},
        {name: 'Contact', href: '#contact'},
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-[#111111]/70 backdrop-blur-xl border-b border-white/10 shadow-lg'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <a
                        href="#"
                        className={`text-2xl font-bold tracking-wide text-white`}
                    >
                        Thabith<span className="text-green-400">.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-[#a3a39d] hover:text-green-400 transition duration-300 text-sm font-medium tracking-wide 
                               ${isActive === link.href.replace('#', '')
                                    ? 'text-green-400'
                                    : 'text-[#a3a39d]'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="#contact"
                            className="px-5 py-2.5 rounded-md bg-green-400 text-black font-bold hover:scale-105 hover:bg-green-300 transition duration-300"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-[#a3a39d]"
                    >
                        {isOpen ? <X size={28}/> : <Menu size={28}/>}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-96 pb-6' : 'max-h-0'
                    }`}
                >
                    <nav className="flex flex-col gap-5 mt-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-[#a3a39d] hover:text-green-400 transition duration-300"
                            >
                                {link.name}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            className="mt-2 w-fit px-5 py-2.5 rounded-md bg-green-400 text-black font-bold"
                        >
                            Hire Me
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;