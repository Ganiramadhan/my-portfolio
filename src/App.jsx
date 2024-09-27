import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import MyFooter from './components/Footer';
import MyProject from './components/projects/MyProject';
import MySkills from './components/Skills/MySkills';
import Contact from './components/Contact';
import SplashScreen from './components/SplashScreen';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [isContentVisible, setIsContentVisible] = useState(false); 

    useEffect(() => {
        const updateInterval = 30;
        const increment = 1;

        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                const nextProgress = prevProgress + increment;
                if (nextProgress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsLoading(false);
                        setTimeout(() => setIsContentVisible(true), 300); 
                    }, 500);
                    return 100;
                }
                return nextProgress;
            });
        }, updateInterval);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {isLoading ? (
                <SplashScreen progress={progress} />
            ) : (
                <div
                    className={`transition-opacity duration-1000 ${
                        isContentVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <Navbar />
                    <Hero />
                    <AboutMe />
                    <MySkills />
                    <MyProject />
                    <Contact />
                    <MyFooter />
                </div>
            )}
        </>
    );
};

export default App;
