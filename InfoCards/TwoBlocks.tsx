'use client'

import { motion } from 'framer-motion';

const ExploreSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col items-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-8 text-center text-gray-500"
          >
            Explore Our Technologies
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              className="bg-gray-500 p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">AI Solutions</h3>
              <p>
                Discover our cutting-edge artificial intelligence solutions that are revolutionizing various industries.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-gray-500 p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">Web3 Development</h3>
              <p>
                Explore the possibilities of Web3 technologies, including blockchain and decentralized applications (DApps).
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreSection;
