import { Router } from 'express';
import { CreateToolController } from './controller/model/ferramentas/tools/CreateToolController';
import { GetAllToolController } from './controller/model/ferramentas/tools/GetAllToolController';
import { GetTagToolController } from './controller/model/ferramentas/tools/GetTagToolController';

const routes = Router();

/*******************************************************************************************************************************************************************/
routes.post('/tools', new CreateToolController().handle);
/*******************************************************************************************************************************************************************/
routes.get('/tools', new GetAllToolController().handle);
/*******************************************************************************************************************************************************************/
routes.get('/tags/tools', new GetTagToolController().handle);

export { routes };
