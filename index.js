const express = require('express');
const app = express();

app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: 'Microservicio funcionando', status: 'ok' });
});

// Otra ruta de ejemplo
app.get('/salud', (req, res) => {
  res.json({ status: 'saludable', timestamp: new Date() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
