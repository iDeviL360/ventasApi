import Cliente from '../models/Cliente';

export async function obtenerClientes(req, res) {
    const clientes = await Cliente.findAll();
    res.json(clientes);
}

export async function obtenerClientePorCedula(req, res) {
    try {

        const cedula = req.params.cedula;

        const cliente = await Cliente.findOne({
            where: {
                cedula
            }
        })

        res.json(cliente);
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Uupss, algo ha ido mal!'
        })
    }
}


export async function agregarCliente(req, res) {
    try {
        const { nombre, cedula } = req.body;

        const nuevoCliente = await Cliente.create({
            nombre,
            cedula
        }, {
            fields: ['nombre', 'cedula']
        });

        res.json(nuevoCliente);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Uupss, algo ha ido mal!'
        })
    }
}