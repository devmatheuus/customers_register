import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadRequestException,
} from '@nestjs/common';

import { catchError, Observable } from 'rxjs';
import { isPrimaError } from '../utils/isPrismaError.util';
import { DatabaseError } from '../types/DatabaseError';
import { handleDatabaseErrors } from '../utils/handleDatabaseError.util';

@Injectable()
export class DatabaseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(error => {
        if (isPrimaError(error)) {
          error = handleDatabaseErrors(error);
        }

        if (error instanceof DatabaseError) {
          throw new BadRequestException(error.message);
        } else {
          throw error;
        }
      }),
    );
  }
}
