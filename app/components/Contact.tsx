'use client'

import React, { useState, useCallback } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { IoLogoWechat } from "react-icons/io5";
import { motion } from 'framer-motion';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const resetInput = useCallback(() => {
        setName('');
        setEmail('');
        setMessage('');
    }, []);

    const handleFormSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const whatsappMessage = `https://wa.me/6283878624702?text=Welcome!%0AName:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;
        
        setTimeout(() => {
            window.open(whatsappMessage, '_blank');
            setLoading(false);
            resetInput();
        }, 2000);
    }, [name, email, message, resetInput]);

    const mapLocation = {
        address: 'Jl. Cigadung Raya Timur no 75, Cigadung, Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40191',
        lat: -6.871849,
        lng: 107.625961,
    };
    const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapLocation.address)}&output=embed`;

    return (
        <motion.section 
            id='contacts' 
            className="py-20 bg-gradient-to-b from-slate-900 to-black text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div 
                    className="flex items-center space-x-3 mb-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <IoLogoWechat size={28} className="text-cyan-400" />
                    <h2 className="text-3xl font-semibold text-white">Contact Us</h2>
                </motion.div>
                <p className="text-gray-400 mb-8 max-w-2xl">
                    We&apos;d love to hear from you! Please fill out the form below to get in touch.
                </p>
            </div>

            <div className="mt-12 max-w-[70rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 bg-gray-900/30 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl">
                {/* Google Maps */}
                <motion.div 
                    className="rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <iframe
                        title="Google Map"
                        src={googleMapsUrl}
                        width="100%"
                        height="400"
                        className="border-0"
                        allowFullScreen
                    ></iframe>
                </motion.div>

                {/* Contact Form */}
                <motion.div 
                    className="bg-gray-800/50 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/10"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <form className="grid grid-cols-1 gap-y-6" onSubmit={handleFormSubmit}>
                        <div>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-4 border border-white/10 rounded-2xl bg-gray-700/50 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-4 border border-white/10 rounded-2xl bg-gray-700/50 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full p-4 border border-white/10 rounded-2xl bg-gray-700/50 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                                placeholder="Your Message"
                                rows={5}
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full py-4 px-6 flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={loading}
                                aria-label="Send Message"
                            >
                                {loading ? 'Sending...' : (
                                    <>
                                        <FaPaperPlane className="text-lg" />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Contact;