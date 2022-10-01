import { Tool } from '@prisma/client';
import ICreateToolDTO from '../../../../controller/model/ferramentas/dtos/iCreateToolDTO';
import { prisma } from '../../../../database/prismaClient';

export class CreateToolService {
  async execute({
    title,
    links,
    descriptions,
    tags,
  }: ICreateToolDTO): Promise<Error | Tool> {
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
