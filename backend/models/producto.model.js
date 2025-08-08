const conexion = require('../src/db');

const Producto = {

    ObtenerTodos: async () => {
        const [datos] = await conexion.query('SELECT * FROM productos');
        return datos;
    }

}

module.exports = Producto;