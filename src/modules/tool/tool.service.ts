import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ToolDTO } from './dto/tool.create.dto';

@Injectable()
export class ToolService {
  constructor(private prisma: PrismaService) {}
  async create(data: ToolDTO) {
    const toolExixts = await this.prisma.tool.findFirst({
      where: {
        id: data.id,
      },
    });
    if (toolExixts) {
      throw new Error('Tool already exists;');
    }
    const tool = await this.prisma.tool.create({
      data,
    });
    return tool;
    // response.status(200).json({ getIdTool });
  }

  async findAll() {
    return this.prisma.tool.findMany();
  }
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