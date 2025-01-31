import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const resetInput = () => {
        setName('');
        setEmail('');
        setMessage('');
    };

    const handleFormSubmit = () => {
        setLoading(true);
        const whatsappMessage = `https://wa.me/6283878624702?text=Welcome!%0AName:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;
        setTimeout(() => {
            window.open(whatsappMessage);
            setLoading(false);
            resetInput();
        }, 2000);
    };

    const mapLocation = {
        address: 'Jl. Cigadung Raya Timur no 75, Cigadung, Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40191',
        lat: -6.871849,
        lng: 107.625961,
    };
    const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapLocation.address)}&output=embed`;


    return (
        <div 
            id="contact" 
            className="py-20 bg-gradient-to-r from-gray-900 to-gray-700 relative" 
            style={{ fontFamily: 'JetBrains Mono, monospace', userSelect: 'none' }} 
        >
            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <ClipLoader color="#ffffff" size={60} />
                </div>
            )}
            <section>
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        Contact Us
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-400">
                        We'd love to hear from you! Please fill out the form below to get in touch.
                    </p>
                </div>
                <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="z-10">
                        {/* Google Map */}
                        <iframe
                            title="Google Map"
                            src={googleMapsUrl}
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg z-10 relative">
                        <form className="grid grid-cols-1 gap-y-6" onSubmit={(e) => { e.preventDefault(); handleFormSubmit(); }}>
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                                    disabled={loading}
                                >
                                    <FaPaperPlane className="mr-2" />
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
