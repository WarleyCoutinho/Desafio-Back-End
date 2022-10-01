import ICreateToolDTO from '../../../../controller/model/ferramentas/dtos/iCreateToolDTO';
import { prisma } from '../../../../database/prismaClient';

export class CreateToolService {
  async execute({
    title,
    links,
    descriptions,
    tags,
  }: ICreateToolDTO): Promise<Error | ICreateToolDTO> {
    const tool = await prisma.tool.create({
      data: {
        title,
        links,
        descriptions,
        tags,
      },
    });

    return tool;
  }
}
