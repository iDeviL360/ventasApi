import Cliente from '../models/Cliente';

export async function obtenerClientes(req, res) {
    const clientes = await Cliente.findAll();
    res.json(clientes);
}

export async function obtenerClientePorCedula(req, res) {
    const cedula = req.params.cedula;
    
    const cliente = await Cliente.findOne({
        where: {
            cedula
        }
    })

    res.json(cliente);

}