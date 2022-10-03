import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ToolDTO } from './dto/tool.create.dto';
import { ToolService } from './tool.service';

@Controller('tools')
export class ToolController {
  constructor(private readonly toolService: ToolService) {}
  // CREATE TOOL
  @Post()
  async create(@Body() data: ToolDTO) {
    return this.toolService.create(data);
  }
  // LISTA TODOS
  @Get()
  async findAll() {
    return this.toolService.findAll();
  }
  //LISTAR POR ID
  @Get(':id')
  async filters(@Param('id') id: string, @Body() data: ToolDTO) {
    return this.toolService.filters(id, data);
  }

  // ATUALIZAR
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: ToolDTO) {
    return this.toolService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.toolService.delete(id);
  }
}
