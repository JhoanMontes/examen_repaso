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

exports.ObtenerProductoID = async (req, res) => {
     try{
        const producto = await ProductoService.ObtenerProductoID(req.params.id);
        res.json(producto);
    }
    catch(error)
    {
        res.status(404).json({ message: error.message});
    }
}


exports.CrearProducto = async (req, res) => {
     try{
        const producto = await ProductoService.crear(req.body);
        res.status(201).json(producto);
    }
    catch(error)
    {
        res.status(404).json({ message: error.message});
    }
}


exports.ActualizarProducto = async (req, res) => {
  try {
    const productoActualizado = await ProductoService.actualizar(req.params.id, req.body);
    res.json(productoActualizado);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.EliminarProducto = async (req, res) => {
  try {
    await ProductoService.eliminar(req.params.id);
    res.status(204).send();

  } catch (error) {
    res.status(404).json({ message: error.message });
  }

};

 exports.ListarProductosNombreDESC = async (req, res) => {
    try {
        const productos = await ProductoService.ListarProductosNombreDESC();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }};

    exports.BuscarProductoPorPrecio = async (req, res) => {
    try {
        
        const { precio } = req.query;
        if (!precio) {
            return res.status(400).json({ message: 'El parámetro de consulta "precio" es obligatorio.' });
        }
        const productos = await ProductoService.BuscarPorPrecio(precio);
        res.json(productos);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};