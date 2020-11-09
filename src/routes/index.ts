import { Router } from 'express';
import usersRoutes from './usersRoutes';

const routes = Router();

/* DONT NEED USE TRYCATCH */
routes.use('/users', usersRoutes);

export default routes;
