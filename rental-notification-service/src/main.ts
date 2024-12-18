import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5174', // Origine autorisée (front-end)
    methods: 'GET,POST,PUT,DELETE', // Méthodes HTTP autorisées
    allowedHeaders: 'Content-Type, Authorization', // En-têtes autorisés
  });

  await app.listen(3000);
  console.log('Application démarrée sur http://localhost:3000');
}
bootstrap();
