import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from './pipe/validation.pipe';
import * as dotenv from 'dotenv';
dotenv.config();

async function startApp() {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix('api');
    const config = new DocumentBuilder()
      .setTitle('NestJS TEST')
      .setDescription('REST API')
      .setVersion('1.0.0')
      .addTag('NodeJS, NestJS, Postgres, sequalize')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);
    await app.listen(PORT, () => console.log("Server listening on port", +PORT));
  } catch (error) {
    console.log(error);
  }

}
startApp();
