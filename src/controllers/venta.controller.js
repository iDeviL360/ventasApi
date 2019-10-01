import Venta from '../models/Venta';
import VentaDetalle from '../models/VentaDetalle';
import Cliente from '../models/Cliente';
import Producto from '../models/Producto';

export async function obtenerVentas(req, res) {
    const { usuarioid } = req.body;

    const ventas = await Venta.findAll({
        where: {
            usuarioid
        },
        include: [{ model: Cliente }]
    });
    res.json(ventas);
}

export async function obtenerVentaPorId(req, res) {
    try {

        const { ventaid } = req.params;
        const { usuarioid } = req.body;

        const venta = await Venta.findOne({
            where: {
                ventaid
            },
            include: [{
                model: Cliente
            }]
        });

        if(!venta) {
            return res.status(404).json({
                message: 'Orden no existe!'
            })
        }

        if(usuarioid != venta.usuarioid) {
            return res.status(403).json({
                message: 'La peticion a la API no es valida'
            })
        }

        venta.dataValues.ventaItems = await VentaDetalle.findAll({
            where: {
                ventaid
            },
            include: [{
                model: Producto,
                attributes: ['descripcion', 'codigoproducto']
            }]
        });

        res.json(venta);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Uups, algo ha ido mal!'
        });
    }

}

export async function guardarVentas(req, res) {

    try {

        const { clienteid, total, ventaItems, usuarioid } = req.body;
        const fecha = Date.now();

        const nuevaVenta = await Venta.create({
            clienteid,
            total,
            fecha,
            usuarioid
        }, {
            fields: ['clienteid', 'total', 'fecha', 'usuarioid']
        });

        const { ventaid } = nuevaVenta;

        ventaItems.forEach(async (ventaItem) => {
            const { productoid, precio } = ventaItem;
            await VentaDetalle.create({
                ventaid,
                productoid,
                precio
            }, {
                fields: ['ventaid', 'productoid', 'precio']
            });
        })


        res.json({
            message: 'Guardado con exito!'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Uups, algo ha ido mal!'
        })
    }

}

export async function borrarVenta(req, res) {
    try {
        const { ventaid } = req.params;

        await VentaDetalle.destroy({
            where: {
                ventaid
            }
        });

        await Venta.destroy({
            where: {
                ventaid
            }
        });

        res.json({
            message: 'Se eliminó con exito'
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Uups, algo ha ido mal!'
        });
    }

}