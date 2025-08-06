import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Results = ({ bios, hashtags, onBack }) => {
  const [copiedIndex, setCopiedIndex] = useState(-1);

  const handleCopy = (bio, index) => {
    navigator.clipboard.writeText(bio);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(-1), 2000); // Reset after 2 seconds
  };

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-4xl font-bold text-white text-center mb-8 font-poppins">Resultados Gerados</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <AnimatePresence>
          {bios.map((bio, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg text-white font-poppins flex flex-col justify-between"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0px 15px 30px rgba(0,0,0,0.2)' }}
            >
              <p className="mb-4">{bio}</p>
              <motion.button
                onClick={() => handleCopy(bio, index)}
                className="bg-secondary text-white font-bold py-2 px-4 rounded-full w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {copiedIndex === index ? 'Copiado!' : 'Copiar'}
              </motion.button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-4 font-poppins">Hashtags Sugeridas</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {hashtags.map((tag, index) => (
            <motion.div
              key={index}
              className="bg-white/20 text-white py-1 px-3 rounded-full cursor-pointer"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
            >
              {tag}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <motion.button
          onClick={onBack}
          className="bg-white/10 text-white font-bold py-2 px-6 rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Voltar
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Results;
