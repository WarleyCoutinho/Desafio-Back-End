import { Request, Response } from 'express';
import { GetAllToolService } from '../../../../services/model/ferramentas/tools/GetAllToolService';

export class GetAllToolController {
  async handle(request: Request, response: Response) {
    const getAllToolService = new GetAllToolService();

    const tools = await getAllToolService.execute();

    return response.json(tools);
  }
}
