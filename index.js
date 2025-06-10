import React from 'react';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Test de imagen</h1>
      <img
        src="https://placekitten.com/300/200"
        alt="Gatito de prueba"
        style={{ borderRadius: '10px', border: '2px solid #333' }}
      />
    </div>
  );
}

export default App;
