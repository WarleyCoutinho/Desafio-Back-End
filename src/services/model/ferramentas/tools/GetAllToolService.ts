import { Tool } from '@prisma/client';
import { prisma } from '../../../../database/prismaClient';
export class GetAllToolService {
  async execute(): Promise<Error | Tool[]> {
    const tools = await prisma.tool.findMany();
    return tools;
  }
}
