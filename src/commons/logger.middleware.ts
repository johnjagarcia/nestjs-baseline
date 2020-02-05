import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(
      'Origin:',
      req.headers.host,
      'Resource:',
      req.originalUrl,
      'Method:',
      req.method.toUpperCase(),
    );
    next();
  }
}
