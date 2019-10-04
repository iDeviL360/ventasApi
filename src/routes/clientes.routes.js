import { Router } from 'express';
import { obtenerClientes, obtenerClientePorCedula, agregarCliente } from '../controllers/cliente.controller';
import { estaAutenticado } from '../middlewares/estaAutenticado';

const router = Router();

router.get('/', estaAutenticado, obtenerClientes);

router.get('/:cedula', estaAutenticado, obtenerClientePorCedula);

router.post('/', estaAutenticado, agregarCliente);


export default router;