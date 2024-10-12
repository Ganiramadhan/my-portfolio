import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaHandshake, FaRocket } from 'react-icons/fa';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const Hero = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const { width, height } = useWindowSize();

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollToTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const sayHello = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
    };

    return (
        <div>
            <div 
                id="home" 
                className="bg-gradient-to-r from-gray-900 to-gray-700 py-20 px-6 md:px-10 flex items-center justify-center" 
                style={{ minHeight: '100vh' }}
            >
                <div className="max-w-5xl w-full md:w-2/3 mt-4 text-center">
                    <h1 
                        className="text-gray-100 text-5xl font-bold mb-4" 
                        style={{ fontFamily: 'JetBrains Mono, monospace', userSelect: 'none' }}
                    >
                        <span>Hello, I'm</span> <span className="text-blue-400">Gani Ramadhan👋</span>
                    </h1>
                    <TypeAnimation
                        sequence={[
                            'Frontend Developer',
                            1000,
                            'Backend Developer',
                            1000,
                            'Security Analyst',
                            1000
                        ]}
                        wrapper="span"
                        speed={10}
                        style={{ fontSize: '1.7em', display: 'inline-block', color: '#A0AEC0', fontFamily: 'JetBrains Mono, monospace', userSelect: 'none' }}
                        repeat={Infinity}
                    />
                    <p 
                        className="mt-4 text-xl text-gray-300" 
                        style={{ fontFamily: 'JetBrains Mono, monospace', userSelect: 'none' }}
                    >
                        I am a full-stack developer with 2 years of experience in React, Next.js, Node.js, Laravel, JavaScript, and TypeScript. If you are interested in learning more or discussing potential collaboration opportunities, please do not hesitate to reach out.
                    </p>
                    <div className="flex justify-center mt-4">
                        <button
                            className='bg-blue-400 text-white px-6 py-3 mt-4 hover:bg-blue-500 transition duration-300 rounded-md shadow-lg transform hover:scale-105'
                            onClick={sayHello}
                        >
                            Say Hello <FaHandshake className="ml-2 inline-block" />
                        </button>
                    </div>
                </div>
            </div>

            {showConfetti && (
                <Confetti
                    width={width}
                    height={height}
                />
            )}

            {showScrollToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 z-50 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
                    title="Scroll to top"
                >
                    <FaRocket className="h-6 w-6" />
                </button>
            )}
        </div>
    );
};

export default Hero;
