// import Header from "./Header"
import Hero from "./Hero"
import BrandBubbles from "./BrandBubbles"

function Layout () {
    return (
        <div 
            className="min-h-screen flex flex-col bg-gradient-to-br from-vintage-beige via-vintage-sage to-modern-teal bg-[length:200%_200%] animate-gradient-shift relative"
        >
            {/* <Header /> */}
            <BrandBubbles />
            <main className="flex-grow z-10">
                <Hero />
            </main>
        </div>
    )
}

export default Layout