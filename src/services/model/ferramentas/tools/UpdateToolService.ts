import { Tool } from '@prisma/client';
import { prisma } from '../../../../database/prismaClient';

type ToolRequest = {
  id: number;
  title: string;
  links: string;
  descriptions: string;
  tags: string;
};

export class UpdateToolService {
  async execute({
    id,
    title,
    links,
    descriptions,
    tags,
  }: ToolRequest): Promise<Error | Tool> {
    const updateTool = await prisma.tool.update({
      where: {
        id,
      },
      data: {
        title,
        links,
        descriptions,
        tags,
      },
    });

    return updateTool;
  }
}
