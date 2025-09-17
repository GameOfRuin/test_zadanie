import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { bootstrapPipes, bootstrapSwagger } from '../bootstrap';
import { appConfig } from '../config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());

  bootstrapSwagger(app);
  bootstrapPipes(app);

  await app.listen(appConfig.port);
}
bootstrap();
