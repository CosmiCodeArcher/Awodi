// import Header from "./Header"
import Hero from "./Hero"
import BrandBubbles from "./BrandBubbles"
import Footer from "./Footer"
import { useState } from "react";

function Layout () {
    const [currentSection, setCurrentSection] = useState(null);
    const [lastViewedSection, setLastViewedSection] = useState(null);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-vintage-beige via-vintage-sage to-modern-teal bg-[length:200%_200%] animate-gradient-shift relative">
            <BrandBubbles />
            <main className="flex-grow z-10">
                <Hero 
                    currentSection={currentSection}
                    setCurrentSection={setCurrentSection}
                    lastViewedSection={lastViewedSection}
                    setLastViewedSection={setLastViewedSection} 
                />
            </main>
            <Footer 
                onSectionChange={(section) => {
                    setCurrentSection(section);
                    setLastViewedSection(section);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
            />
        </div>
    )
}

export default Layout