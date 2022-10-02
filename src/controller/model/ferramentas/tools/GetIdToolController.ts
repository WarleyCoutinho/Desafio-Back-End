import { Request, Response } from 'express';
import { GetIdToolService } from '../../../../services/model/ferramentas/tools/GetIdToolService';

export class GetIdToolController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;
    const getIdToolService = new GetIdToolService();

    const getIdTool = await getIdToolService.execute({
      id,
    });

    return response.status(200).json({ getIdTool });
  }
}
