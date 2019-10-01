import { Router } from 'express';
import { obtenerClientes, obtenerClientePorCedula } from '../controllers/cliente.controller';
import { estaAutenticado } from '../middlewares/estaAutenticado';

const router = Router();

router.get('/', estaAutenticado, obtenerClientes);

router.get('/:cedula', estaAutenticado, obtenerClientePorCedula);


export default router;