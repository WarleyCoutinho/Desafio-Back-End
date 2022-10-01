import { Router } from 'express';
import { CreateToolController } from './controller/tools/CreateToolController';

const routes = Router();

/*******************************************************************************************************************************************************************/
routes.post('/create/tools', new CreateToolController().handle);

export { routes };
