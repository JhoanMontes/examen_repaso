
const express = require('express');
const router = express.Router();

const ProductoController = require('../controllers/producto.controller');

router.get('/', ProductoController.ObtenerTodosProductos);
router.get('/ordenados-desc', ProductoController.ListarProductosNombreDESC);

router.get('/buscar', ProductoController.BuscarProductoPorPrecio);
router.get('/:id', ProductoController.ObtenerProductoID);

router.post('/', ProductoController.CrearProducto);

router.put('/:id', ProductoController.ActualizarProducto);

router.delete('/:id', ProductoController.EliminarProducto);



module.exports = router;
