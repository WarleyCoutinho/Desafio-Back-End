import { Router } from 'express';
import { CreateToolController } from './controller/model/ferramentas/tools/CreateToolController';
import { DeleteToolController } from './controller/model/ferramentas/tools/DeleteToolController';
import { GetAllToolController } from './controller/model/ferramentas/tools/GetAllToolController';
import { GetIdToolController } from './controller/model/ferramentas/tools/GetIdToolController';
import { GetTagToolController } from './controller/model/ferramentas/tools/GetTagToolController';
import { UpdateToolController } from './controller/model/ferramentas/tools/UpdateToolController';

const routes = Router();

/*******************************************************************************************************************************************************************/
routes.get('/tool/stags', new GetTagToolController().handle);
/*******************************************************************************************************************************************************************/
routes.post('/tools', new CreateToolController().handle);
/*******************************************************************************************************************************************************************/
routes.get('/tools', new GetAllToolController().handle);
/*******************************************************************************************************************************************************************/
routes.get('/tools/:id', new GetIdToolController().handle);
/*******************************************************************************************************************************************************************/
routes.delete('/tools/:id', new DeleteToolController().handle);
/*******************************************************************************************************************************************************************/
routes.put('/tools/:id', new UpdateToolController().handle);

export { routes };
