import { Router } from 'express';
import { estaAutenticado } from '../middlewares/estaAutenticado';
import { getProductos } from '../controllers/producto.controller';

const router = Router();

router.get('/', estaAutenticado, getProductos);

export default router;