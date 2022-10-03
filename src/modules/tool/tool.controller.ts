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
  @Post()
  async create(@Body() data: ToolDTO) {
    return this.toolService.create(data);
  }
  @Get()
  async findAll() {
    return this.toolService.findAll();
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: ToolDTO) {
    return this.toolService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.toolService.delete(id);
  }
}
