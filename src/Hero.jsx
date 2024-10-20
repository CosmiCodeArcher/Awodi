import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";

function Hero () {
    const [isVisible, setIsVisible] = useState(true)
    const [isHovering, setIsHovering] = useState(false)
    const [hoverTimer, setHoverTimer] = useState(null);
    const [hoveredSection, setHoveredSection] = useState(null);

    const handleMouseEnter = (section = null) => {
        clearTimeout(hoverTimer);
        setIsHovering(true);
        if (section) {
            setHoveredSection(section);
        }
    };

    const handleMouseLeave = () => {
        const timer = setTimeout(() => {
            setIsHovering(false);
            setHoveredSection(null);
        }, 1000);
        setHoverTimer(timer);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setIsVisible(prev => !prev)
        }, 2000)

        return () => {
            clearInterval(timer)
            if (hoverTimer) clearTimeout(hoverTimer);
        }
    }, [hoverTimer])

    return (
        <div 
            className="relative p-8" >
            <img 
                src="/Awodi.png" 
                alt="Awodi brand text"
                className="w-[15%] p-3 h-auto hover:shadow-[0_0_25px_rgba(255,127,80,0.8)] transition-all duration-300 rounded-full"
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={handleMouseLeave}
            />
            {!isHovering && (
                <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
                    <svg className="w-8 h-8 text-modern-coral animate-bounce-left mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    <span className="cool-text text-modern-coral text-glow font-bold text-2xl animate-pulse">
                        Discover Awodi
                    </span>
                </div>
            )}
            {isHovering && (
                <div 
                    className="mt-8"
                    onMouseEnter={()  => handleMouseEnter()}

                    onMouseLeave={handleMouseLeave}
                >
                    <nav className="mb-4">
                        <Link 
                            to="/" 
                            className="mx-2 hover:text-modern-coral"
                            onMouseEnter={() => handleMouseEnter('portfolio')}
                        >
                            Portfolio
                        </Link>
                        <Link 
                            to="/about" 
                            className="mx-2 hover:text-modern-coral"
                            onMouseEnter={() => handleMouseEnter('about')}
                        >
                            About
                        </Link>
                        <Link 
                            to="/contact" 
                            className="mx-2 hover:text-modern-coral"
                            onMouseEnter={() => handleMouseEnter('contact')}
                        >
                            Contact
                        </Link>
                    </nav>
                    {hoveredSection === 'portfolio' && (
                        <div onMouseEnter={() => handleMouseEnter('portfolio')} >
                            <Portfolio />
                        </div>
                    )}
                    {hoveredSection === 'about' && (
                        <div onMouseEnter={() => handleMouseEnter('about')} >
                            <About />
                        </div>
                    )}
                    {hoveredSection === 'contact' && (
                        <div onMouseEnter={() => handleMouseEnter('contact')} >
                            <Contact />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Hero