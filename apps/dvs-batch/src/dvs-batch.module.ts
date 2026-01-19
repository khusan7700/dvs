import { Module } from '@nestjs/common';
import { DvsBatchController } from './dvs-batch.controller';
import { DvsBatchService } from './dvs-batch.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [DvsBatchController],
  providers: [DvsBatchService],
})
export class DvsBatchModule {}
