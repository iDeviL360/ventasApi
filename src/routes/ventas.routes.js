import { Router } from 'express';
import { obtenerVentas, guardarVentas, obtenerVentaPorId, borrarVenta } from '../controllers/venta.controller';
import { estaAutenticado } from '../middlewares/estaAutenticado';

const router = Router();

router.get('/', estaAutenticado, obtenerVentas);

router.get('/:ventaid', estaAutenticado, obtenerVentaPorId);

router.post('/', estaAutenticado, guardarVentas);

router.delete('/:ventaid', estaAutenticado, borrarVenta);


export default router;