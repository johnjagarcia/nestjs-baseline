import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CustomLoggerService extends Logger {

    error(message: string, trace: string) {

        try {
            return console.log(message, trace)
        } catch (error) {
            return console.log(message, trace)
        }
        super.error(message, trace);
    }

    log(message: string) {

        super.log(message);
    }

    warn(message: string) {
 
        super.warn(message);
    }

    debug(message: string) {
        super.debug(message)
    }

    verbose(message: string) {
        super.verbose(message)
    }
}
