import { Tool } from '@prisma/client';
import { prisma } from '../../../../database/prismaClient';

type toolRequest = {
  id: number;
};

export class DeleteToolService {
  async execute({ id }: toolRequest): Promise<Error | Tool> {
    const deleteTool = await prisma.tool.delete({
      where: {
        id: id,
      },
    });

    return deleteTool;
  }
}
