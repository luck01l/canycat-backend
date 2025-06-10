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
      image: 'https://placekitten.com/300/200'
    },
    {
      id: 2,
      name: 'Consulta veterinaria general',
      category: 'Consulta',
      description: 'Consulta médica para cualquier mascota. Evaluación completa.',
      price: 300,
      stock: 50,
      image: 'https://images.app.goo.gl/SUcKKnGeDn3GwC97A.png'
    },
    {
      id: 3,
      name: 'Vacuna antirrábica',
      category: 'Vacunación',
      description: 'Aplicación de vacuna contra la rabia para perros y gatos.',
      price: 150,
      stock: 25,
      image: 'https://i.imgur.com/gkErkzr.jpg'
    },
    {
      id: 4,
      name: 'Cepillo dental para mascotas',
      category: 'Higiene',
      description: 'Cepillo ergonómico para mantener limpios los dientes de tu mascota.',
      price: 80,
      stock: 30,
      image: 'https://i.imgur.com/FBXByOY.jpg'
    },
    {
      id: 5,
      name: 'Pelota de goma para perros',
      category: 'Juguetes',
      description: 'Juguete interactivo resistente a mordidas intensas.',
      price: 120,
      stock: 15,
      image: 'https://i.imgur.com/RhrCmUQ.jpg'
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
