const express = require('express');
const userRoutes = require('./routes/users');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Servicio corriendo en http://localhost:${port}`);
});