import { Request, Response } from 'express';
import { UpdateToolService } from '../../../../services/model/ferramentas/tools/UpdateToolService';

export class UpdateToolController {
  async handle(request: Request, response: Response) {
    const { id, title, links, descriptions, tags } = request.body;
    const updateToolService = new UpdateToolService();

    const updateTool = await updateToolService.execute({
      id,
      title,
      links,
      descriptions,
      tags,
    });

    return response.status(201).json({ updateTool });
  }
}
