import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const PORT = configService.get<number>('PORT') || 8080;

  await app.listen(PORT, () =>
    console.log(`server up and running on port ${PORT}`),
  );
}
bootstrap();
