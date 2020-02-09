import { NestFactory, NestApplication } from '@nestjs/core';
import { AppModule } from './app.module';
import { BlobServiceClient, logger } from '@azure/storage-blob';
import { Logger, INestApplication } from '@nestjs/common';
import { CustomLoggerModule } from './custom-logger/custom-logger.module'
import { ConfigService } from './config/config.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HealthentityModule } from './healthentity/healthentity.module';

function swagger(app: INestApplication) {

  const options = new DocumentBuilder()
    .setTitle('HealtEntity example')
    .setDescription('BaseLine API description')
    .setVersion('1.0')
    .addTag('LineaBase')
    .build();

  const healthentityDocument = SwaggerModule.createDocument(app, options, {
    include: [HealthentityModule],
  });

  SwaggerModule.setup('api/healt', app, healthentityDocument);

}

async function bootstrap() {
  const app = await NestFactory.create(AppModule,
    {
      logger: true
    }
  );
  
  app.enableCors();
  app.useLogger(app.get(CustomLoggerModule));
  const config = app.get(ConfigService);
  const port = config.get('PORT') || 4880;
  await app.listen(port, () => console.log(`Server started at http://localhost:${port}`));
  swagger(app);

}
bootstrap();