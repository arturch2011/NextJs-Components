'use client'

import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <section className="h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center max-w-7xl"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
                    Sustainable Development of AI and Web3 Technologies
                </h1>
                <p className="text-lg md:text-xl mb-8 text-center">Building a future with AI and Web3 responsibly.</p>
                <a
                    href="#"
                    className="bg-white text-blue-500 hover:text-blue-700 px-6 py-3 rounded-full font-bold text-lg shadow-lg"
                >
                    Learn more
                </a>
            </motion.div>
        </section>
    )
}

export default HeroSection
