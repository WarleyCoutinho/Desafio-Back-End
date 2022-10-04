import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ToolDTO } from './dto/tool.create.dto';

@Injectable()
export class ToolService {
  constructor(private prisma: PrismaService) {}
  // CREATE TOOL
  async create(data: ToolDTO) {
    const tool = await this.prisma.tool.create({
      data,
    });
    return tool;
  }
  // LISTA TODOS
  async findAll() {
    return this.prisma.tool.findMany();
  }
  //LISTAR POR ID
  async filters(id: string, data: ToolDTO) {
    const toolExixts = await this.prisma.tool.findUnique({
      where: {
        id,
      },
    });
    if (!toolExixts) {
      throw new Error('Tool does not exists!');
    }
    return await this.prisma.tool.findUnique({
      where: {
        id: data.id,
      },
    });
  }

  // //LISTAR POR TAGS
  // async getFilteredTags(tags: string, data: ToolDTO) {
  //   return await this.prisma.tool.findMany();
  // }

  // ATUALIZAR
  async update(id: string, data: ToolDTO) {
    const toolExixts = await this.prisma.tool.findUnique({
      where: {
        id,
      },
    });
    if (!toolExixts) {
      throw new Error('Tool does not exists!');
    }
    return await this.prisma.tool.update({
      data,
      where: {
        id: data.id,
      },
    });
  }
  // DELETAR
  async delete(id: string) {
    const toolExixts = await this.prisma.tool.findUnique({
      where: {
        id,
      },
    });
    if (!toolExixts) {
      throw new Error('Tool does not exists!');
    }

    return await this.prisma.tool.delete({
      where: {
        id,
      },
    });
  }
}
