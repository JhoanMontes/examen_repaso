const ProductoModel = require('../models/producto.model');

const ProductoService = {

    ObtenerTodos: async () => {
        return ProductoModel.ObtenerTodos();
    }

};

module.exports = ProductoService;