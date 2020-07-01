import { Router } from 'express';
import MovieController from './app/Controllers/MovieController';
import CategoryController from './app/Controllers/CategoryController';

const routes = Router();

routes.get('/movies', MovieController.index);
routes.post('/movies', MovieController.store);
routes.put('/movies/:id', MovieController.update);

routes.post('/categorys', CategoryController.store);

export default routes;
