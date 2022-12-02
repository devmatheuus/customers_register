import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UnauthorizedInterceptor } from './common/errors/interceptors/unauthorizedError.interceptor';
import { ConflictInterceptor } from './common/errors/interceptors/conflictError.interceptor';
import { DatabaseInterceptor } from './common/errors/interceptors/databaseError.interceptor';
import { NotFoundInterceptor } from './common/errors/interceptors/notFoundError.interceptor';
import { BadRequestInterceptor } from './common/errors/interceptors/badRequestError.interceptor';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.useGlobalInterceptors(new ConflictInterceptor());
  app.useGlobalInterceptors(new BadRequestInterceptor());
  app.useGlobalInterceptors(new NotFoundInterceptor());
  app.useGlobalInterceptors(new DatabaseInterceptor());
  app.useGlobalInterceptors(new UnauthorizedInterceptor());
  await app.listen(3001);
}
bootstrap();
