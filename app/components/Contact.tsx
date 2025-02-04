'use client'

import React, { useState, useCallback } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

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

    const handleFormSubmit = useCallback((e: any) => {
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
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="max-w-6xl mx-auto px-6">
            {/* Header */}
                <div className="flex items-center space-x-3 mb-6">
                    <FaPaperPlane size={28} className="text-gray-200" />
                    <h2 className="text-3xl font-semibold text-gray-100">Contact Us</h2>
                </div>
                <p className="text-gray-400 mb-8 max-w-2xl">
                    We'd love to hear from you! Please fill out the form below to get in touch.
                </p>
            </div>

            <div className="mt-12 max-w-[70rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 bg-gray-900 border border-gray-700 rounded-xl shadow-xl">
                {/* Google Maps */}
                <div className="rounded-lg overflow-hidden shadow-md">
                    <iframe
                        title="Google Map"
                        src={googleMapsUrl}
                        width="100%"
                        height="400"
                        className="border-0"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
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
                                className="w-full p-4 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 transition-all"
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
                                className="w-full p-4 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 transition-all"
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
                                className="w-full p-4 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                placeholder="Your Message"
                                rows={5}
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full py-4 px-6 flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all shadow-lg disabled:bg-gray-500"
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
                </div>
            </div>
        </section>
    );
};

export default Contact;
