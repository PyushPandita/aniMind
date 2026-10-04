import express from 'express';

const app = express();
const PORT = 3000;

// Middleware: lets the server read JSON request bodies
app.use(express.json());

// A simple health-check route to confirm the server is alive
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'AniMind backend is running 🎌' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
