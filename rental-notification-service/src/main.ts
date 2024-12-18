import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//point d'entrée principal de l'app
//initialise appModule et démarre mon serveur sur le port 3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5174', 
    methods: 'GET,POST,PUT,DELETE', // Méthodes HTTP autorisées
    allowedHeaders: 'Content-Type, Authorization', // En-têtes autorisés
  });

  await app.listen(3000);
  console.log('Application démarrée sur http://localhost:3000');
}
bootstrap();
