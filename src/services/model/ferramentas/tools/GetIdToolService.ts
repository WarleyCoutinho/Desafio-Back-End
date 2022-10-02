import { Tool } from '@prisma/client';
import { prisma } from '../../../../database/prismaClient';

type ToolRequest = {
  id: number;
};

export class GetIdToolService {
  async execute({ id }: ToolRequest): Promise<Error | Tool | null> {
    const getIdTool = await prisma.tool.findUnique({
      where: {
        id,
      },
    });

    return getIdTool;
  }
}
