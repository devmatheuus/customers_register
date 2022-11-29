import { BadRequestException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export const isOwnerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  const { customerId } = req;

  if (id !== customerId) {
    throw new BadRequestException('Unauthorized');
  }

  next();
};
