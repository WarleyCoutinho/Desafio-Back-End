import { Router } from 'express';
import { CreateToolController } from './controller/model/ferramentas/tools/CreateToolController';
import { GetAllToolController } from './controller/model/ferramentas/tools/GetAllToolController';

const routes = Router();

/*******************************************************************************************************************************************************************/
routes.post('/tools', new CreateToolController().handle);
/*******************************************************************************************************************************************************************/
routes.get('/tools', new GetAllToolController().handle);

export { routes };
