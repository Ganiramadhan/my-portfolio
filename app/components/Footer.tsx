import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiMail, HiLocationMarker } from 'react-icons/hi';

const MyFooter = () => {
    const socialLinks = [
        { icon: <FaGithub className="w-5 h-5" />, href: "https://github.com/Ganiramadhan", label: "GitHub" },
        { icon: <FaLinkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/ganiramadhan35/", label: "LinkedIn" },
        { icon: <FaInstagram className="w-5 h-5" />, href: "https://www.instagram.com/ganiiraaa/?hl=en", label: "Instagram" },
    ];

    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contacts" },
    ];

    return (
        <footer className="bg-[#0f0f0f] text-white border-t border-zinc-800">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">
                            <span className="text-blue-500">Gani</span>Pedia
                        </h2>
                        <p className="text-zinc-400 mb-6 max-w-sm">
                            Full Stack Developer crafting modern web experiences with clean code and creative solutions.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="p-2.5 bg-zinc-800/50 hover:bg-zinc-700 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-zinc-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-zinc-400">
                                <HiMail className="w-5 h-5 text-zinc-500" />
                                <a href="mailto:ganiramadhan35@gmail.com" className="hover:text-white transition-colors">
                                    ganiramadhan35@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-400">
                                <HiLocationMarker className="w-5 h-5 text-zinc-500" />
                                <span>Bandung, Indonesia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-zinc-800">
                    <p className="text-center text-zinc-500 text-sm flex items-center justify-center gap-1">
                        &copy; {new Date().getFullYear()} GaniPedia. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default MyFooter;
