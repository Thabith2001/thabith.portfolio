import React from 'react';
import Header from '@/src/components/header';
import type { Metadata } from 'next';
import {orbitronFont} from "@/src/resources/fonts";
import Footer from "@/src/components/footer";

export const metadata: Metadata = {
    title: "Thabith's Portfolio",
    description: 'This is my portfolio website',
};

const RootLayout = ({
                        children,
                    }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en" className="scroll-smooth">
        <body className={ `${orbitronFont.className}`}>
        <Header />
        {children}
        <Footer />
        </body>
        </html>
    );
};

export default RootLayout;