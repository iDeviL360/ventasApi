import { Router } from 'express';
import { registrarUsuario, loggearUsuario } from '../controllers/usuario.controller';

const router = Router();


router.post('/registro', registrarUsuario);

router.post('/login', loggearUsuario);


export default router;
