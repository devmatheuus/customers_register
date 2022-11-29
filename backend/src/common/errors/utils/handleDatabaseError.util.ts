import { DatabaseError } from '../types/DatabaseError';
import { PrismaClientError } from '../types/PrismaClientError';
import { UniqueConstraintError } from '../types/UniqueConstraintError';
import { NotFoundError } from '../types/NotFoundError';

enum PrismaErrors {
  UniqueConstraintFail = 'P2002',
  NotFoundError = 'P2025',
}

export const handleDatabaseErrors = (error: PrismaClientError): Error => {
  switch (error.code) {
    case PrismaErrors.UniqueConstraintFail:
      return new UniqueConstraintError(error);

    case PrismaErrors.NotFoundError:
      return new NotFoundError(error.message);

    default:
      return new DatabaseError(error.message);
  }
};
