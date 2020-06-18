import { Router } from 'express';
import MovieController from './app/Controllers/MovieController';

const routes = Router();

routes.get('/movies', MovieController.index);
routes.post('/movies', MovieController.create);

export default routes;
