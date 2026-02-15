import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function ThemeToggle() {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        const isDark = document.documentElement.classList.contains("dark")
        setDark(isDark)
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark)
    }, [dark])

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setDark(!dark)}
            className="relative w-10 h-10 rounded-full bg-accent/50 hover:bg-accent overflow-hidden"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={dark ? "sun" : "moon"}
                    initial={{ y: 20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="flex items-center justify-center"
                >
                    {dark ? (
                        <Sun size={20} className="text-yellow-400 fill-yellow-400" />
                    ) : (
                        <Moon size={20} className="text-primary fill-primary" />
                    )}
                </motion.div>
            </AnimatePresence>
        </Button>
    )
}