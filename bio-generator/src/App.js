import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import axios from 'axios';

import Welcome from './components/Welcome';
import Form from './components/Form';
import Results from './components/Results';

function App() {
  const [screen, setScreen] = useState('welcome'); // 'welcome', 'form', 'results'
  const [bios, setBios] = useState([]);
  const [hashtags, setHashtags] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (formData) => {
    setLoading(true);
    setError('');
    console.log("Sending data to backend:", formData);

    try {
      // NOTE: This assumes the backend server is running on localhost:3001
      const response = await axios.post('http://localhost:3001/gerarBio', formData);

      console.log("Received response from backend:", response.data);
      setBios(response.data.bios || []);
      setHashtags(response.data.hashtags || []);
      setScreen('results');

    } catch (err) {
      console.error("Error calling backend API:", err);
      setError('Ocorreu um erro ao gerar as bios. Por favor, tente novamente.');
      // Optionally, stay on the form screen to show the error
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="font-poppins bg-gray-900 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-gray-900 to-secondary opacity-80 animate-gradient-xy"></div>

      {/* Content */}
      <div className="z-10 w-full">
        <AnimatePresence mode="wait">
          {screen === 'welcome' && (
            <Welcome key="welcome" onStart={() => setScreen('form')} />
          )}
          {screen === 'form' && (
            <Form key="form" onGenerate={handleGenerate} />
          )}
          {screen === 'results' && (
            <Results key="results" bios={bios} hashtags={hashtags} onBack={() => setScreen('form')} />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

export default App;
