import { Request, Response } from 'express';
import { CreateToolService } from '../../services/tools/CreateToolService';

export class CreateToolController {
  async handle(request: Request, response: Response) {
    const { title, links, descriptions, tags } = request.body;

    const createToolService = new CreateToolService();
    const result = await createToolService.execute({
      title,
      links,
      descriptions,
      tags,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
