import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DemoFilter } from './core/fiters/demo.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new DemoFilter());
  await app.listen(3000);
}
bootstrap();
