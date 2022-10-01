import { Tool } from '@prisma/client';
import { prisma } from '../../../../database/prismaClient';
export class GetTagToolService {
  async execute(): Promise<Error | Tool[]> {
    const tags = await prisma.tool.findMany();
    return tags;
  }
}
