import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { HttpErrorFilter } from './commons/http-error.filter';
import { LoggingInterceptor } from './commons/logging-interceptor';
import { CustomLoggerModule } from './custom-logger/custom-logger.module';
import { HealthentityModule } from './healthentity/healthentity.module';
import { HealtEntity } from './entities/healtentity.entity';

@Module({
    providers: [
        {
            provide: APP_FILTER,
            useClass: HttpErrorFilter,
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggingInterceptor,
        },
    ],
    imports: [CustomLoggerModule, HealthentityModule],
})
export class ApiModule { }