import React from 'react';
import { motion } from 'framer-motion';

const Welcome = ({ onStart }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full text-white text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-4 font-poppins">
        BioBlitz
      </h1>
      <motion.p
        className="text-xl md:text-2xl mb-8 font-poppins"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Crie bios incríveis em segundos!
      </motion.p>
      <motion.button
        onClick={onStart}
        className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-full shadow-lg font-poppins"
        whileHover={{ scale: 1.1, boxShadow: '0px 0px 20px rgba(107, 70, 193, 0.5)' }}
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: [1, 1.05, 1],
          transition: { duration: 1.5, repeat: Infinity }
        }}
      >
        Criar Bio
      </motion.button>
    </motion.div>
  );
};

export default Welcome;
