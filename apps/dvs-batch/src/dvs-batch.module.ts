import { Module } from '@nestjs/common';
import { DvsBatchController } from './dvs-batch.controller';
import { DvsBatchService } from './dvs-batch.service';

@Module({
  imports: [],
  controllers: [DvsBatchController],
  providers: [DvsBatchService],
})
export class DvsBatchModule {}
