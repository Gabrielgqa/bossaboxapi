import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ToolController from './app/controllers/ToolController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Rota sessão
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
// Rotas usuário
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

// Rotas ferramenta
routes.get('/tools', ToolController.index);
routes.post('/tools', ToolController.store);
routes.delete('/tools/:id', ToolController.delete);

export default routes;
