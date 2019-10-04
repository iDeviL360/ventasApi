//Importaciones
import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';


//Routes imports
import clientesRoutes from './routes/clientes.routes';
import productosRoutes from './routes/productos.routes';
import ventasRoutes from './routes/ventas.routes';
import usuarioRoutes from './routes/usuario.routes';

const app = express();
dotenv.config();

//Configuraciones
app.set('port', process.env.PORT || 3000);


//Middlewares
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());


//Static Files
app.use(express.static(path.join(__dirname, "public")));


//Rutas
app.use('/api/clientes', clientesRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/ventas', ventasRoutes);
app.use('/api/usuarios', usuarioRoutes);


export default app;