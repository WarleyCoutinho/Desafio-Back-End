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
  // @Post()
  // @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  // async create(@Body() data: ToolDTO) {
  //   return this.toolService.create(data);
  // }
  // LISTA TODOS
  @Get()
  async findAll() {
    return this.toolService.findAll();
  }
  // LISTA TODOS OU POR TAGS_LIKE
  @Get(':tags')
  async getFilteredTags(@Param('tags') tags_like: any) {
    return this.toolService.getFilteredTags(tags_like);
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
    return this.toolService.delete(id)
      ? 'Registro Deletado com Sucesso'
      : 'Não foi Possivel Apagar';
  }
}
