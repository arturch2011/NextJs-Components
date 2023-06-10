'use client'

import { motion } from 'framer-motion';

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-8 text-center text-purple-600"
          >
            Contact Us
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="bg-blue-500 rounded-md p-8 shadow-md"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-xl font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-gray-300 rounded-md p-3"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-xl font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-gray-300 rounded-md p-3"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-xl font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full border-gray-300 rounded-md p-3"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-md font-bold text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
