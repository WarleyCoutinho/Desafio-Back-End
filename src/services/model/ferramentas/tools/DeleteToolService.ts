// import { Tool } from '@prisma/client';
import ICreateToolDTO from '../../../../controller/model/ferramentas/dtos/iCreateToolDTO';
import { prisma } from '../../../../database/prismaClient';

type toolRequest = {
  id: number;
};

export class DeleteToolService {
  async execute({ id }: toolRequest): Promise<Error | ICreateToolDTO> {
    const deleteTool = await prisma.tool.delete({
      where: {
        id: id,
      },
    });

    return deleteTool;
  }
}
