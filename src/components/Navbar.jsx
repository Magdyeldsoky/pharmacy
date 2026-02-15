import { Pill, Info } from "lucide-react"
import { motion } from "framer-motion"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
    return (
        <motion.nav 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-16 flex items-center justify-between px-6 md:px-12 border-b border-border bg-background/70 backdrop-blur-xl sticky top-0 z-50"
        >
            <div className="flex items-center gap-2.5 text-xl font-extrabold tracking-tighter text-foreground group cursor-pointer">
                <div className="bg-primary p-1.5 rounded-xl text-primary-foreground group-hover:rotate-12 transition-transform duration-300">
                    <Pill className="w-5 h-5" />
                </div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                    Creative Pharmacy
                </span>
            </div>

            <div className="flex items-center gap-6">
                <motion.div 
                    whileHover={{ y: -2 }}
                    className="hidden md:flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                    <Info className="w-4 h-4" />
                    About Us
                </motion.div>

                <div className="h-6 w-[1px] bg-border hidden md:block" />

                <ThemeToggle />
            </div>
        </motion.nav>
    )
}