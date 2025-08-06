import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Form = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    profession: '',
    hobbies: '',
    goals: '',
    tone: 'profissional',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hobbiesArray = formData.hobbies.split(',').map(h => h.trim());
    onGenerate({ ...formData, hobbies: hobbiesArray });
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full w-full max-w-2xl mx-auto p-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="w-full">
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg mb-6"
          whileHover={{ y: -5 }}
        >
          <label className="block text-white text-lg font-poppins mb-2" htmlFor="profession">
            Sua Profissão
          </label>
          <motion.input
            id="profession"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            className="w-full bg-white/20 text-white placeholder-white/70 p-3 rounded-lg border-2 border-transparent focus:border-secondary focus:outline-none transition"
            placeholder="Ex: Designer Gráfico"
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>

        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg mb-6"
          whileHover={{ y: -5 }}
        >
          <label className="block text-white text-lg font-poppins mb-2" htmlFor="hobbies">
            Hobbies (separados por vírgula)
          </label>
          <motion.input
            id="hobbies"
            name="hobbies"
            value={formData.hobbies}
            onChange={handleChange}
            className="w-full bg-white/20 text-white placeholder-white/70 p-3 rounded-lg border-2 border-transparent focus:border-secondary focus:outline-none transition"
            placeholder="Ex: Leitura, café, viagens"
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>

        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg mb-6"
          whileHover={{ y: -5 }}
        >
          <label className="block text-white text-lg font-poppins mb-2" htmlFor="goals">
            Seus Objetivos
          </label>
          <motion.input
            id="goals"
            name="goals"
            value={formData.goals}
            onChange={handleChange}
            className="w-full bg-white/20 text-white placeholder-white/70 p-3 rounded-lg border-2 border-transparent focus:border-secondary focus:outline-none transition"
            placeholder="Ex: Conectar com criativos"
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>

        <div className="text-center">
          <motion.button
            type="submit"
            className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-12 rounded-full shadow-lg font-poppins"
            whileHover={{ scale: 1.1, boxShadow: '0px 0px 20px rgba(107, 70, 193, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Gerar Bios
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default Form;
