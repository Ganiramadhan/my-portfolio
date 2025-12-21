'use client'

import React, { useState, useCallback } from 'react';
import { HiMail, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

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
        const whatsappMessage = `https://wa.me/6283878624702?text=Hello!%0AName:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;
        
        setTimeout(() => {
            window.open(whatsappMessage, '_blank');
            setLoading(false);
            resetInput();
        }, 1000);
    }, [name, email, message, resetInput]);

    const mapLocation = {
        address: 'Jl. Cigadung Raya Timur no 75, Cigadung, Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40191',
    };
    const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapLocation.address)}&output=embed`;

    const contactInfo = [
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "ganiramadhan35@gmail.com",
            href: "mailto:ganiramadhan35@gmail.com"
        },
        {
            icon: <FaWhatsapp className="w-5 h-5" />,
            label: "WhatsApp",
            value: "+62 838 7862 4702",
            href: "https://wa.me/6283878624702"
        },
        {
            icon: <HiLocationMarker className="w-5 h-5" />,
            label: "Location",
            value: "Bandung, Indonesia",
            href: null
        }
    ];

    return (
        <section id='contacts' className="py-24 px-6 bg-[#0a0a0a] text-white">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                            <HiMail className="w-6 h-6 text-blue-500" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
                    </div>
                    <p className="text-zinc-400 max-w-2xl">
                        Have a project in mind or want to collaborate? I&apos;d love to hear from you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Side - Contact Info & Map */}
                    <div className="space-y-8">
                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl"
                                >
                                    <div className="p-3 bg-zinc-800 rounded-lg text-blue-400">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-zinc-500 text-sm">{info.label}</p>
                                        {info.href ? (
                                            <a 
                                                href={info.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-blue-400 transition-colors"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-white">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Map */}
                        <div className="rounded-xl overflow-hidden border border-zinc-800 h-64">
                            <iframe
                                title="Location"
                                src={googleMapsUrl}
                                width="100%"
                                height="100%"
                                className="border-0"
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div>
                        <form 
                            onSubmit={handleFormSubmit}
                            className="p-6 md:p-8 bg-zinc-900/50 border border-zinc-800 rounded-xl"
                        >
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                                        placeholder="Tell me about your project..."
                                        rows={5}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors"
                                >
                                    {loading ? (
                                        <span>Sending...</span>
                                    ) : (
                                        <>
                                            <HiPaperAirplane className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;