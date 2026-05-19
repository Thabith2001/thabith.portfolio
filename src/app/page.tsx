
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
            <Hero />
            <About />
            <Projects />
            <Skills />
            <WhatsAppFloat />
            <Contacts/>
        </main>
    );
};

export default Home;