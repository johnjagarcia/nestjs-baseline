import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService, configService } from './config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from './commons/logger.middleware';
import { ApiModule } from './api.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(configService.createTypeOrmOptions()),
    ConfigModule,ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService]
})
export class AppModule {
  /*configure(consumer: MiddlewareConsumer) {
     consumer.apply(LoggerMiddleware).forRoutes('*');
   }*/
}
