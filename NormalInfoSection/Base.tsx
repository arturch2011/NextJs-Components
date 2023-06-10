'use client'

import { motion } from 'framer-motion';

const AboutSection = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants2 = {
    hidden: { opacity: 0, x: -70 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="bg-white text-gray-800 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-8 text-center"
          >
            About Us
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl mb-8 text-center"
          >
            We are a team passionate about sustainable development in the fields of AI and Web3 technologies.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg md:text-2xl text-center ">
            Our mission is to create innovative solutions that leverage the power of AI and Web3 while promoting environmental responsibility and ethical practices.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
