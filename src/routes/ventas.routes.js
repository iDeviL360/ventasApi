import { Router } from 'express';
import { obtenerVentas, guardarVentas, obtenerVentaPorId, borrarVenta, editarVenta } from '../controllers/venta.controller';
import { estaAutenticado } from '../middlewares/estaAutenticado';

const router = Router();

router.get('/', estaAutenticado, obtenerVentas);

router.get('/:ventaid', estaAutenticado, obtenerVentaPorId);

router.post('/', estaAutenticado, guardarVentas);

router.put('/:ventaid', estaAutenticado, editarVenta);

router.delete('/:ventaid', estaAutenticado, borrarVenta);


export default router;