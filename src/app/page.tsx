import React from 'react';


import Hero from '@/src/app/sections/hero';
import About from '@/src/app/sections/about';
import Projects from "@/src/app/sections/projects";
import Skills from "@/src/app/sections/skill";
import WhatsAppFloat from "@/src/components/whatsapp-float";
import Contacts from "@/src/app/sections/contacts";


const Home = () => {
    return (
        <main className="w-full min-h-screen overflow-x-hidden">
            <section id="hero" className="portfolio-section">
                <Hero />
            </section>

            <section id="about" className="portfolio-section">
                <About />
            </section>

            <section id="projects" className="portfolio-section">
                <Projects />
            </section>

            <section id="skills" className="portfolio-section">
                <Skills />
            </section>

            <section id="contact" className="portfolio-section">
                <Contacts />
            </section>
            <WhatsAppFloat/>
        </main>
    );
};

export default Home;