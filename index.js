const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Configura CORS explícitamente
app.use(cors({
  origin: 'http://localhost:3000', // Solo permite tu frontend local
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Alimento para perros' },
    { id: 2, name: 'Juguete para gatos' },
    { id: 3, name: 'Shampoo antiséptico' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
