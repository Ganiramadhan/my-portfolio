import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logoImage from '../assets/myIcon.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        setIsOpen(false);
        const element = document.getElementById(menu.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-colors duration-300 ${
                isScrolled ? 'bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 shadow-md' : 'bg-transparent'
            } font-sans`}
        >
            <div className="container mx-auto p-4 flex justify-between items-center">
                <div className="flex items-center">
                    {/* Smaller logo */}
                    <img src={logoImage} alt="ganipedia logo" style={{ width: '35px' }} />
                    <div className="text-indigo-600 text-xl font-bold ml-2">
                        <span className='text-white'>GaniPedia</span>
                    </div>
                </div>
                <div className={`hidden md:flex md:items-center md:space-x-6`}>
                    <ul className="flex space-x-6">
                        {['Home', 'About', 'Project', 'Contact'].map((menu) => (
                            <li key={menu}>
                                <a
                                    href={`#${menu.toLowerCase()}`}
                                    className={`text-lg transition-colors duration-300 ease-in-out ${
                                        isScrolled && activeMenu === menu
                                            ? 'text-white font-semibold bg-blue-500 rounded-md px-3 py-2'
                                            : 'text-white hover:text-gray-300'
                                    }`}
                                    onClick={() => handleMenuClick(menu)}
                                >
                                    {menu}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:hidden flex items-center space-x-4">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                        {isOpen ? (
                            <XMarkIcon className="h-8 w-8 text-white" />
                        ) : (
                            <Bars3Icon className="h-8 w-8 text-white" />
                        )}
                    </button>
                </div>
                <ul
                    className={`fixed top-0 left-0 h-full w-full bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 flex flex-col items-center justify-center space-y-6 ${
                        isOpen ? 'block' : 'hidden'
                    } md:hidden z-50`}
                >
                    <li className="absolute top-4 right-4">
                        <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
                            <XMarkIcon className="h-8 w-8 text-white" />
                        </button>
                    </li>
                    {['Home', 'About', 'Project', 'Contact'].map((menu) => (
                        <li key={menu}>
                            <a
                                href={`#${menu.toLowerCase()}`}
                                className={`text-lg transition-colors duration-300 ease-in-out ${
                                    isScrolled && activeMenu === menu
                                        ? 'text-white font-semibold bg-blue-500 rounded-md px-3 py-2'
                                        : 'text-white hover:text-gray-300'
                                }`}
                                onClick={() => handleMenuClick(menu)}
                            >
                                {menu}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
