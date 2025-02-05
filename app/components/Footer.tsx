import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const MyFooter = () => {
    return (
        <footer className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
            <div className="container mx-auto px-6 md:px-10">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold text-gray-100">GANI PEDIA</h2>
                        <p className="mt-2">"Creating magic with lines of code." 💥</p>
                    </div>
                    <div className="flex space-x-4">
                        <a
                            href="https://www.instagram.com/ganiiraaa/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition duration-300"
                            aria-label="Visit our Instagram"
                        >
                            <FaInstagram size={32} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ganiramadhan35/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition duration-300"
                            aria-label="Visit our LinkedIn profile"
                        >
                            <FaLinkedin size={32} />
                        </a>
                        <a
                            href="https://github.com/Ganiramadhan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition duration-300"
                            aria-label="Visit our GitHub profile"
                        >
                            <FaGithub size={32} />
                        </a>
                    </div>
                </div>
                <div className="mt-6 border-t border-gray-700 pt-6 md:flex md:justify-between">
                    <div className="md:w-1/2">
                        <h3 className="text-lg font-semibold text-gray-100">Contact Us</h3>
                        <p className="mt-2">Jl. Cigadung, Kec. Cibeunying Kaler, Kota Bandung</p>
                        <p className="mt-1">Email: ganiramadhan35@gmail.com</p>
                    </div>
                </div>
                <div className="mt-6 text-center text-gray-500 text-sm">
                    &copy; 2025 GaniPedia. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default MyFooter;
