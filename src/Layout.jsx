// import Header from "./Header"
import Hero from "./Hero"

function Layout () {
    return (
        <div 
            className="min-h-screen flex flex-col bg-gradient-to-br from-vintage-beige via-vintage-sage to-modern-teal bg-[length:200%_200%] animate-gradient-shift"
        >
            {/* <Header /> */}
            <main className="flex-grow ">
                <Hero />
            </main>
        </div>
    )
}

export default Layout