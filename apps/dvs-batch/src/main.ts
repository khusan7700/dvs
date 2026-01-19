import { NestFactory } from '@nestjs/core';
import { DvsBatchModule } from './dvs-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(DvsBatchModule);
  await app.listen(3000);
}
bootstrap();
