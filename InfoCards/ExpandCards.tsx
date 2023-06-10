'use client'

import { motion } from 'framer-motion';

const CrossContent = () => {
  const squareVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <div className="p-10 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 bg-gray-900">
      <motion.div
        className="bg-blue-500 p-4 md:p-6 rounded-lg shadow-md flex flex-col justify-between"
        whileHover="hover"
        variants={squareVariants}
      >
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-4">Building DApps</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere tellus in dolor commodo, a feugiat felis tempus.
          </p>
        </div>
        <div className="mt-4 md:mt-6">
          <button className="bg-white text-blue-500 px-4 py-2 rounded-md shadow-md hover:bg-blue-100">
            Learn More
          </button>
        </div>
      </motion.div>
      <motion.div
        className="bg-green-500 p-4 md:p-6 rounded-lg shadow-md flex flex-col justify-between"
        whileHover="hover"
        variants={squareVariants}
      >
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-4">DApp Development</h3>
          <p className="text-gray-700">
            Nullam sit amet tellus ac nisi gravida fringilla quis sed nulla. Ut feugiat est et est fermentum, nec bibendum ex tincidunt.
          </p>
        </div>
        <div className="mt-4 md:mt-6">
          <button className="bg-white text-green-500 px-4 py-2 rounded-md shadow-md hover:bg-green-100">
            Learn More
          </button>
        </div>
      </motion.div>
      <motion.div
        className="bg-purple-500 p-4 md:p-6 rounded-lg shadow-md flex flex-col justify-between"
        whileHover="hover"
        variants={squareVariants}
      >
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-4">DApps and Web3</h3>
          <p className="text-gray-700">
            Aenean vel luctus quam, ac lobortis justo. Integer scelerisque orci non enim posuere bibendum.
          </p>
        </div>
        <div className="mt-4 md:mt-6">
          <button className="bg-white text-purple-500 px-4 py-2 rounded-md shadow-md hover:bg-purple-100">
            Learn More
          </button>
        </div>
      </motion.div>
      <motion.div
        className="bg-yellow-500 p-4 md:p-6 rounded-lg shadow-md flex flex-col justify-between"
        whileHover="hover"
        variants={squareVariants}
      >
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-4">DApp Security</h3>
          <p className="text-gray-700">
            Quisque vitae orci at neque accumsan egestas. Nullam ultrices turpis eget est ullamcorper, non semper sapien scelerisque.
          </p>
        </div>
        <div className="mt-4 md:mt-6">
          <button className="bg-white text-yellow-500 px-4 py-2 rounded-md shadow-md hover:bg-yellow-100">
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CrossContent;
