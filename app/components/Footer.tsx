import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiMail, HiLocationMarker, HiHeart } from 'react-icons/hi';

const MyFooter = () => {
    const socialLinks = [
        { icon: <FaGithub className="w-4 h-4" />, href: "https://github.com/Ganiramadhan", label: "GitHub" },
        { icon: <FaLinkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/ganiramadhan35/", label: "LinkedIn" },
        { icon: <FaInstagram className="w-4 h-4" />, href: "https://www.instagram.com/ganiiraaa/?hl=en", label: "Instagram" },
    ];

    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contacts" },
    ];

    return (
        <footer className="bg-[#080808] text-white border-t border-zinc-800/50">
            <div className="max-w-5xl mx-auto px-6 py-14">
                <div className="grid md:grid-cols-3 gap-10 mb-10">
                    {/* Brand */}
                    <div>
                        <h2 className="text-xl font-bold mb-3">
                            <span className="text-blue-400">Gani</span>
                            <span className="text-zinc-300">Pedia</span>
                        </h2>
                        <p className="text-zinc-500 text-sm leading-relaxed mb-5 max-w-xs">
                            Full Stack Developer crafting modern web experiences with clean code and creative solutions.
                        </p>
                        <div className="flex gap-2">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="p-2.5 bg-zinc-800/40 hover:bg-zinc-700/50 border border-zinc-700/30 rounded-xl text-zinc-500 hover:text-white transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2.5">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-zinc-500 hover:text-white text-sm transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-2.5">
                            <li className="flex items-center gap-3 text-zinc-500">
                                <HiMail className="w-4 h-4 text-zinc-600" />
                                <a href="mailto:ganiramadhan35@gmail.com" className="hover:text-white text-sm transition-colors">
                                    ganiramadhan35@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-500">
                                <HiLocationMarker className="w-4 h-4 text-zinc-600" />
                                <span className="text-sm">Bandung, Indonesia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-zinc-800/40">
                    <p className="text-center text-zinc-600 text-sm flex items-center justify-center gap-1.5">
                        &copy; {new Date().getFullYear()} GaniPedia. Made with 
                        <HiHeart className="w-3.5 h-3.5 text-red-500" />
                        in Bandung
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default MyFooter;
