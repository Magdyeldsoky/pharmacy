import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Model3D from "./Model3D"

export default function HeroSection() {
    return (
        <section className="relative w-full h-screen flex items-center overflow-hidden bg-background">
            
            <div className="absolute inset-0 z-10">
                <Model3D />
            </div>

            <div className="absolute inset-0 z-15 bg-gradient-to-r from-background via-background/20 to-transparent pointer-events-none" />

            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "circOut" }}
                className="relative z-20 w-full md:w-[50%] px-8 md:px-24 flex flex-col justify-center"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block w-fit px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium"
                >
                    Trusted Healthcare Solutions
                </motion.div>

                <motion.h1 
                    className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter text-foreground"
                >
                    Creative <br/>
                    <span className="text-primary italic">Pharmacy</span>
                </motion.h1>

                <motion.p 
                    className="text-muted-foreground mb-10 text-xl max-w-md leading-snug"
                >
                    Elevating your wellness journey with cutting-edge medical care and expert consultation.
                </motion.p>

                <div className="flex items-center gap-4">
                    <Button size="lg" className="rounded-full h-16 px-10 text-xl shadow-2xl shadow-primary/40 group">
                        Get Started
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
                    </Button>
                </div>
            </motion.div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-2"
                >
                    <div className="w-1 h-2 bg-primary rounded-full" />
                </motion.div>
            </div>

        </section>
    )
}