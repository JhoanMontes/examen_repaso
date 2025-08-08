
const express = require('express');
const router = express.Router();

const ProductoController = require('../controllers/producto.controller');

router.get('/', ProductoController.ObtenerTodosProductos);

module.exports = router;
