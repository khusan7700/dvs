import { NestFactory } from '@nestjs/core';
import { DvsBatchModule } from './dvs-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(DvsBatchModule);
  await app.listen(process.env.PORT_BATCH ?? 3000);
}
bootstrap();
