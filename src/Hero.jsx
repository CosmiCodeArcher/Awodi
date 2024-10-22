import { useState, useEffect } from 'react'
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import { saveState, loadState } from './localStorage';

//Before starting

function Hero () {
    const [isVisible, setIsVisible] = useState(true)
    const [isHovering, setIsHovering] = useState(false)
    const [currentSection, setCurrentSection] = useState(null);
    const [lastViewedSection, setLastViewedSection] = useState(null);

    useEffect (() => {
        // Load the last viewed section from localStorage
        const savedState = loadState();
        if (savedState && savedState.lastViewedSection) {
            setLastViewedSection(savedState.lastViewedSection);
            setCurrentSection(savedState.lastViewedSection);
        }

        const timer = setInterval(() => {
            setIsVisible(prev => !prev)
        }, 2000)

        return () => clearInterval(timer);
            
        }, []);

    // Save the last viewed section whenever it changes
    useEffect(() => {
        if (lastViewedSection) {
            saveState({ lastViewedSection });
        }
    }, [lastViewedSection]);

        const handleMouseEnter = (section = null) => {
            setIsHovering(true);
            if (section) {
                setCurrentSection(section);
                setLastViewedSection(section)
            }
        };

        const handleMouseLeave = () => {
            setIsHovering(false);
        };

        return (
            <div className="relative p-4 sm:p-8">
                <img 
                    src="/Awodi.png" 
                    alt="Awodi brand text"
                    className="w-[40%] sm:w-[25%] md:w-[20%] lg:w-[15%] p-3 h-auto hover:shadow-[0_0_25px_rgba(255,127,80,0.8)] transition-all duration-300 rounded-full"
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={handleMouseLeave}
                />
                {!isHovering && !lastViewedSection && (
                    <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-modern-coral animate-bounce-left mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        <span className="cool-text text-modern-coral text-glow font-bold text-xl sm:text-2xl animate-pulse">
                            Discover Awodi
                        </span>
                    </div>
                )}
                <div className="mt-6 sm:mt-8">
                    <nav className="mb-4">
                        <button
                            className="mx-2 hover:text-modern-coral text-sm sm:text-base"
                            onMouseEnter={() => handleMouseEnter('portfolio')}
                        >
                            Portfolio
                        </button>
                        <button 
                            className="mx-2 hover:text-modern-coral text-sm sm:text-base"
                            onMouseEnter={() => handleMouseEnter('about')}
                        >
                            About
                        </button>
                        <button
                            className="mx-2 hover:text-modern-coral text-sm sm:text-base"
                            onMouseEnter={() => handleMouseEnter('contact')}
                        >
                            Contact
                        </button>
                    </nav>
                    {isHovering && (
                        <div 
                            onMouseEnter={() => handleMouseEnter()}
                            onMouseLeave={handleMouseLeave}
                        >
                            {currentSection === 'portfolio' && (
                                <div onMouseEnter={() => handleMouseEnter('portfolio')}>
                                    <Portfolio />
                                </div>
                            )}
                            {currentSection === 'about' && (
                                <div onMouseEnter={() => handleMouseEnter('about')}>
                                    <About />
                                </div>
                            )}
                            {currentSection === 'contact' && (
                                <div onMouseEnter={() => handleMouseEnter('contact')}>
                                    <Contact />
                                </div>
                            )}
                        </div>
                    )}
                    {!isHovering && lastViewedSection && (
                        <div>
                            {lastViewedSection === 'portfolio' && <Portfolio />}
                            {lastViewedSection === 'about' && <About />}
                            {lastViewedSection === 'contact' && <Contact />}
                        </div>
                    )}
                </div>
            </div>
        );
}

export default Hero