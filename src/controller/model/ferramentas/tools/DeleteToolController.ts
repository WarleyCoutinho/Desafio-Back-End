import { Request, Response } from 'express';
import { DeleteToolService } from '../../../../services/model/ferramentas/tools/DeleteToolService';

export class DeleteToolController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;
    const deleteToolService = new DeleteToolService();

    const deleteTool = await deleteToolService.execute({
      id,
    });

    return response.json(deleteTool);
  }
}
