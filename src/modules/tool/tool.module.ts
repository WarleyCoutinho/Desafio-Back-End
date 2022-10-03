import { Module } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { ToolController } from './tool.controller';
import { ToolService } from './tool.service';

@Module({
  controllers: [ToolController],
  providers: [ToolService, PrismaService],
})
export class ToolModule {}
