import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class IsOwnerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { customerId } = req;

    if (id !== customerId) {
      throw new UnauthorizedException('Unauthorized');
    }

    next();
  }
}
