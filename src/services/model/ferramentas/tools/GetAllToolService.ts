import ICreateToolDTO from '../../../../controller/model/ferramentas/dtos/iCreateToolDTO';
import { prisma } from '../../../../database/prismaClient';

export class GetAllToolService {
  async execute(): Promise<ICreateToolDTO[]> {
    const tools = await prisma.tool.findMany();
    return tools;
  }
}
