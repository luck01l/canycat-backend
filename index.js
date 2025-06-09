const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Alimento para perros', category: 'Alimento' },
    { id: 2, name: 'Juguete para gatos', category: 'Juguetes' },
    { id: 3, name: 'Shampoo antiséptico', category: 'Higiene' },
    { id: 4, name: 'Croquetas para gatos', category: 'Alimento' },
    { id: 5, name: 'Pelota para perros', category: 'Juguetes' },
    { id: 6, name: 'Cepillo dental canino', category: 'Higiene' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
