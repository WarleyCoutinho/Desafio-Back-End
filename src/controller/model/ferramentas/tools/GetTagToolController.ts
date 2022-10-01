import { Request, Response } from 'express';
import { GetTagToolService } from '../../../../services/model/ferramentas/tools/GetTagToolService';

export class GetTagToolController {
  async handle(request: Request, response: Response) {
    const getTagToolService = new GetTagToolService();

    const tags = await getTagToolService.execute();

    return response.json(tags);
  }
}
