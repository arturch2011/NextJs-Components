'use client'

import { motion } from 'framer-motion';

const InfoCardsSection = () => {
  const cards = [
    {
      title: 'AI Solutions',
      description: 'Discover our cutting-edge artificial intelligence solutions that are revolutionizing various industries.',
      icon: 'fas fa-robot',
    },
    {
      title: 'Web3 Development',
      description: 'Explore the possibilities of Web3 technologies, including blockchain and decentralized applications (DApps).',
      icon: 'fas fa-cubes',
    },
    {
      title: 'Sustainable Innovation',
      description: 'Learn how we integrate sustainability practices into every aspect of our technology development process.',
      icon: 'fas fa-leaf',
    },
  ];

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center justify-center h-12 w-12 bg-blue-500 text-white rounded-full">
                <i className={`${card.icon} text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
