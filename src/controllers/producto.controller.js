import Producto from '../models/Producto';

export async function getProductos(req, res) {
    const productos = await Producto.findAll();
    res.json(productos);
};
