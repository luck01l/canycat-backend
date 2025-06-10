const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Croquetas premium perro adulto',
      category: 'Alimento',
      description: 'Alimento balanceado para perros adultos de razas medianas y grandes.',
      price: 520,
      stock: 10,
      image: '' // imagen opcional
    },
    {
      id: 2,
      name: 'Consulta veterinaria general',
      category: 'Consulta',
      description: 'Consulta médica general para mascotas. Incluye revisión y diagnóstico.',
      price: 300,
      stock: 50,
      image: ''
    },
    {
      id: 3,
      name: 'Vacuna antirrábica',
      category: 'Vacunación',
      description: 'Aplicación de vacuna contra la rabia. Requiere revisión previa.',
      price: 150,
      stock: 25,
      image: ''
    },
    {
      id: 4,
      name: 'Cepillo dental para mascotas',
      category: 'Higiene',
      description: 'Cepillo ergonómico para limpiar los dientes de tu perro o gato.',
      price: 80,
      stock: 30,
      image: ''
    },
    {
      id: 5,
      name: 'Pelota de goma para perros',
      category: 'Juguetes',
      description: 'Pelota interactiva resistente, ideal para juegos y mordidas.',
      price: 120,
      stock: 15,
      image: ''
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
