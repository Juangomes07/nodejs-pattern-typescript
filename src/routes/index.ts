import { Router } from 'express';

const routes = Router();

/* DONT NEED USE TRYCATCH */
routes.get('/users', (request, response) => {
  return response.json({ get: 'Route GET is ok' });
});

export default routes;
