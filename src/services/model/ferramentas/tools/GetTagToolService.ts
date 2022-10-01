import ICreateToolDTO from '../../../../controller/model/ferramentas/dtos/iCreateToolDTO';
import { prisma } from '../../../../database/prismaClient';

export class GetTagToolService {
  async execute(): Promise<ICreateToolDTO[]> {
    const tags = await prisma.tool.findMany();
    return tags;
  }
}
