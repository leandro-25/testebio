// NOTE: npm install failed due to an environment error (uv_cwd).
// This code will not run without its dependencies (express, cors).
// I am proceeding to write the code as planned, and will address the execution failure later.

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// --- API Endpoints ---

// POST /gerarBio: Mocks generating bios with Groq
app.post('/gerarBio', (req, res) => {
  const { profession, hobbies, goals, tone } = req.body;

  console.log('Received data for /gerarBio:', { profession, hobbies, goals, tone });

  // Mocked response simulating AI-generated content
  const bios = [
    `🚀 ${profession} movido(a) a café e ${hobbies.join(', ')}. Buscando ${goals}. Conecte-se comigo! #${profession}`,
    `✨ Especialista em ${profession} | Apaixonado(a) por ${hobbies[0]}. Minha meta é ${goals}. Vamos criar juntos!`,
    `Transformando ideias em realidade como ${profession}. Nas horas vagas, curto ${hobbies[0]}. Objetivo: ${goals}. #WorkLifeBalance`
  ];

  const hashtags = [`#${profession.replace(/\s+/g, '')}`, `#${goals.replace(/\s+/g, '')}`, '#SocialBio', '#PerfilPop'];

  res.json({ bios, hashtags });
});

// POST /salvarBio: Mocks saving a bio to Supabase
app.post('/salvarBio', (req, res) => {
  const { userId, bio, platform } = req.body;
  console.log('Received data for /salvarBio:', { userId, bio, platform });

  // Mocked response simulating a successful DB insert
  res.json({ id: Math.floor(Math.random() * 1000), bio });
});

// GET /getUserBios: Mocks retrieving saved bios from Supabase
app.get('/getUserBios', (req, res) => {
  const { userId } = req.query;
  console.log('Received request for /getUserBios for userId:', userId);

  // Mocked response with a static list of bios
  const savedBios = [
    { id: 1, bio_text: 'Designer gráfico apaixonado por criar marcas únicas 🌟 | DM para collabs!', platform: 'Instagram' },
    { id: 2, bio_text: 'Engenheiro de Software | Construindo o futuro, uma linha de código por vez.', platform: 'LinkedIn' }
  ];

  res.json({ bios: savedBios });
});

// POST /trackUsage: Mocks tracking an event with Umami
app.post('/trackUsage', (req, res) => {
  const { userId, event } = req.body;
  console.log('Received data for /trackUsage:', { userId, event });

  // Mocked response
  res.json({ success: true });
});


app.listen(PORT, () => {
  console.log(`Mock backend server running on http://localhost:${PORT}`);
});
