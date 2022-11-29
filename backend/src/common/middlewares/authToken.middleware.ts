import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { BadRequestException } from '@nestjs/common';

export const authTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    throw new BadRequestException('Missing authorization!');
  }

  jwt.verify(token, process.env.JWT_SECRET, (error: any, decoded: any) => {
    if (error) {
      throw new BadRequestException('Invalid token');
    }

    req.customerId = decoded.sub;

    next();
  });
};
