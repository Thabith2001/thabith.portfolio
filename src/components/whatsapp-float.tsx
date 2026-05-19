'use client';

import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
    return (
        <a
            href="https://wa.me/94766553936"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="
                fixed bottom-6 right-6 z-50
                w-14 h-14 md:w-16 md:h-16
                rounded-full
                bg-[#25D366]
                flex items-center justify-center
                shadow-[0_0_30px_rgba(37,211,102,0.45)]
                hover:scale-110
                hover:shadow-[0_0_40px_rgba(37,211,102,0.65)]
                transition-all duration-300
                group
            "
        >
            {/* Pulse Effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

            {/* Icon */}
            <FaWhatsapp className="relative z-10 text-white text-3xl md:text-4xl" />

            {/* Tooltip */}
            <span
                className="
                    absolute right-20
                    whitespace-nowrap
                    bg-[#111111]
                    text-white text-sm
                    px-4 py-2 rounded-xl
                    border border-white/10
                    opacity-0 translate-x-3
                    group-hover:opacity-100
                    group-hover:translate-x-0
                    transition-all duration-300
                    pointer-events-none
                "
            >
                Chat on WhatsApp
            </span>
        </a>
    );
};

export default WhatsAppFloat;