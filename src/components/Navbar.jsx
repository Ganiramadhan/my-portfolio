import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logoImage from '../assets/myIcon.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
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

    const handleLogoClick = () => {
        setActiveMenu('Home');
        setIsOpen(false);
        const element = document.getElementById('home');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav
        className={`fixed w-full z-50 transition-colors duration-300 ${
            isScrolled ? 'bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 shadow-md' : 'bg-transparent'
        } font-sans`}
        style={{ fontFamily: 'JetBrains Mono, monospace', userSelect: 'none' }} 
    >
        <div className="container mx-auto p-4 flex justify-between items-center">
            <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
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
                                style={{ userSelect: 'none' }} 
                            >
                                {menu}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* ... (sisa kode tetap sama) */}
        </div>
    </nav>
    
    );
};

export default Navbar;
