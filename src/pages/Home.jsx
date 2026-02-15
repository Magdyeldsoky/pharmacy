import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"

export default function Home() {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-300">
            <Navbar />
            <HeroSection />
        </div>
    )
}
