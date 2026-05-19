'use client';

import React, { useState } from 'react';
import {
    IoMailOutline,
    IoCallOutline,
    IoLocationOutline,
} from 'react-icons/io5';

import {
    FaGithub,
    FaLinkedinIn,
    FaWhatsapp,
} from 'react-icons/fa';
import axios from "axios";
import MailStatusModal from "@/src/components/mail-model";

const Contacts = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [mailSuccess, setMailSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data } = await axios.post('/api/contact', {
                name,
                email,
                message,
            });

            if (data?.success) {
                setMailSuccess(true);
                setOpenModal(true);

                setName('');
                setEmail('');
                setMessage('');
            } else {
                setMailSuccess(false);
                setOpenModal(true);

                console.error(data?.error);
            }
        } catch (err: any) {
            console.error(err);

            setMailSuccess(false);
            setOpenModal(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            className="relative overflow-hidden px-6 py-24"
            id="contact"
        >
            <div className="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-green-600/10 blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="flex items-center gap-3 mb-14">
                    <span className="text-3xl md:text-4xl font-bold tracking-[0.15em] uppercase text-white">
                        Contact
                        <span className="text-green-400">Me</span>
                    </span>

                    <div className="flex-1 h-px bg-green-400/40" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* LEFT SIDE (unchanged UI) */}
                    <div className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl p-8">
                        <p className="text-green-400 uppercase tracking-[0.25em] text-xs mb-4">
                            Let&apos;s Build Something
                        </p>

                        <h2 className="text-4xl font-bold text-white leading-tight mb-6">
                            Have a project idea or opportunity?
                        </h2>

                        <p className="text-[#a3a39d] leading-relaxed mb-10">
                            I&apos;m open to freelance work, internships, collaborations, and full-stack engineering opportunities.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-5">
                            <div className="flex items-center gap-4">
                                <IoMailOutline className="text-green-400" size={22} />
                                <a href="mailto:shahulhameed.thabith@gmail.com" className="text-white hover:text-green-400">
                                    Email Me
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <IoCallOutline className="text-green-400" size={22} />
                                <a href="tel:+94766553936" className="text-white hover:text-green-400">
                                    Call Me
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <IoLocationOutline className="text-green-400" size={22} />
                                <p className="text-white">Colombo, Sri Lanka</p>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="flex gap-4 mt-10">
                            <a href="https://github.com/thabith2001" className="text-[#a3a39d] hover:text-green-400">
                                <FaGithub size={20} />
                            </a>

                            <a href="https://www.linkedin.com/in/thabithshahulhameed/" className="text-[#a3a39d] hover:text-green-400">
                                <FaLinkedinIn size={20} />
                            </a>

                            <a href="https://wa.me/94766553936" className="text-[#a3a39d] hover:text-green-400">
                                <FaWhatsapp size={20} />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE  */}
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl p-8 space-y-6"
                    >
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Full Name"
                            className="w-full rounded-2xl focus:outline-none bg-black/20 border border-white/10 px-5 py-4 text-white"
                        />

                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email Address"
                            className="w-full rounded-2xl focus:outline-none bg-black/20 border border-white/10 px-5 py-4 text-white"
                        />

                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Message"
                            rows={6}
                            className="w-full rounded-2xl focus:outline-none bg-black/20 border border-white/10 px-5 py-4 text-white resize-none"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-2xl bg-green-400 text-black font-semibold py-4 hover:bg-green-300 transition"
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>

                </div>
            </div>

            <MailStatusModal
                open={openModal}
                success={mailSuccess}
                onClose={() => setOpenModal(false)}
            />
        </section>
    );
};

export default Contacts;