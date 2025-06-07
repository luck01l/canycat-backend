const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Alimento para perros' },
    { id: 2, name: 'Juguete para gatos' },
    { id: 3, name: 'Shampoo antiséptico' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});