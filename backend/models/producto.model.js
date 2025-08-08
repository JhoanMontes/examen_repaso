const conexion = require('../src/db');

const Producto = {

    ObtenerTodos: async () => {
        const [datos] = await conexion.query('SELECT * FROM productos');
        return datos;
    },

    crear: async (datos) => {
        const [resultado] = await conexion.query('INSERT INTO productos SET ?', [datos]);

        return {id: resultado.insertId, ...datos};   
    },

    actualizar:  async(id, datos) => {
        const [resultado] = await conexion.query('UPDATE productos SET ? WHERE id_producto = ?', [datos, id]);
        return resultado.affectedRows;

    },

    eliminar: async(id) => {
        const [resultado] = await conexion.query('DELETE from productos where id_producto = ?', [id]);
        return resultado.affectedRows;
    },

    ObtenerProductoID: async(id) => {
        const [datos] = await conexion.query('SELECT * FROM productos WHERE id_producto = ?', [id]);
        return datos[0] || null;
    },


    ListarProductosNombreDESC: async() => {
        const [datos] = await conexion.query('SELECT * FROM productos ORDER BY nombre DESC ');
        return datos;
    },

       buscarPorPrecio: async (precio) => {
        const [datos] = await conexion.query('SELECT * FROM productos WHERE precio <= ?', [precio]);
        return datos;
    }

    

}

module.exports = Producto;