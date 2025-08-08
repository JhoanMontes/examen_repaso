const ProductoService = require('../services/producto.service');

exports.ObtenerTodosProductos = async (req, res) => {
    try{
        const productos = await ProductoService.ObtenerTodos();
        res.json(productos);
    }
    catch(error)
    {
        res.status(500).json({ message: error.message});
    }

};