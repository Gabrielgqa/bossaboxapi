import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ToolController from './app/controllers/ToolController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/tools', ToolController.store);
routes.use(authMiddleware);
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);
routes.post('/sessions', SessionController.store);

export default routes;
