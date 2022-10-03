import { Module } from '@nestjs/common';
import { ToolModule } from './modules/tool/tool.module';

@Module({
  imports: [ToolModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
