const ProductoModel = require('../models/producto.model');

const ProductoService = {

    ObtenerProductoID: async (id) => {
        const producto = await ProductoModel.ObtenerProductoID(id);
        if (!producto) {
            throw new Error('Producto no encontrado.');
        }
        return producto;
    },

    ObtenerTodos: async () => {
        return ProductoModel.ObtenerTodos();
    },

    crear: async (datos) => {
        if (!datos.nombre) {
            throw new Error('El nombre es obligatorio')
        }
        return ProductoModel.crear(datos);
    },

    actualizar: async (id, datos) => {
        const productoExiste = await ProductoModel.ObtenerProductoID(id);
        if (!productoExiste) {
            throw new Error('Producto no encontrado')
        }
        await ProductoModel.actualizar(id, datos);

        return { ...productoExiste, ...datos };
    },

    eliminar: async (id) => {
        const productoExiste = await ProductoModel.ObtenerProductoID(id);
        if (!productoExiste) {
            throw new Error('Producto no encontrado')
        }
        await ProductoModel.eliminar(id);

        return;
    },

    ListarProductosNombreDESC: async () => {
        return ProductoModel.ListarProductosNombreDESC();
    },


    BuscarPorPrecio: async (precio) => {

        const precioFloat = parseFloat(precio);
        if (isNaN(precioFloat) || precioFloat < 0) {
            throw new Error('El precio debe ser un número positivo.');
        }
     
        return ProductoModel.buscarPorPrecio(precioFloat);
    },


};

module.exports = ProductoService;