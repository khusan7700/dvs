import { Injectable } from '@nestjs/common';

@Injectable()
export class DvsBatchService {
  getHello(): string {
    return 'Welcome to DVS-batch server!!';
  }
}
