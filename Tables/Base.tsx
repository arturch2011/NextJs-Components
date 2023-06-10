'use client'

import { motion, AnimatePresence } from 'framer-motion';

const FuturisticTable = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 28, email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Smith', age: 32, email: 'janesmith@example.com' },
    { id: 3, name: 'Bob Johnson', age: 45, email: 'bobjohnson@example.com' },
  ];

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto">
        <motion.div
          className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-900">
              <tr>
                <th
                  className="py-4 px-6 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider"
                  scope="col"
                >
                  ID
                </th>
                <th
                  className="py-4 px-6 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider"
                  scope="col"
                >
                  Name
                </th>
                <th
                  className="py-4 px-6 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider"
                  scope="col"
                >
                  Age
                </th>
                <th
                  className="py-4 px-6 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider"
                  scope="col"
                >
                  Email
                </th>
                <th className="py-4 px-6 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <AnimatePresence>
              <tbody className="divide-y divide-gray-700">
                {data.map((row) => (
                  <motion.tr
                    key={row.id}
                    className="hover:bg-gray-900"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={rowVariants}
                  >
                    <td className="py-4 px-6 text-sm text-gray-300">{row.id}</td>
                    <td className="py-4 px-6 text-sm text-gray-300">{row.name}</td>
                    <td className="py-4 px-6 text-sm text-gray-300">{row.age}</td>
                    <td className="py-4 px-6 text-sm text-gray-300">{row.email}</td>
                    <td className="py-4 px-6 text-center">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                        Edit
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md ml-2">
                        Delete
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </AnimatePresence>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default FuturisticTable;
