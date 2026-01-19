import { Controller, Get } from '@nestjs/common';
import { DvsBatchService } from './dvs-batch.service';

@Controller()
export class DvsBatchController {
  constructor(private readonly dvsBatchService: DvsBatchService) {}

  @Get()
  getHello(): string {
    return this.dvsBatchService.getHello();
  }
}
