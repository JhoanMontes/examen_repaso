const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const ProductoRoutes = require('./routes/producto.routes');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/api/productos', ProductoRoutes);

app.listen(port, ()=> {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})