import { Request, Response, NextFunction } from 'express';
import { UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

export const authTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) throw new UnauthorizedException('Missing authorization!');

  jwt.verify(token, process.env.JWT_SECRET, (error: any, decoded: any) => {
    if (error) {
      throw new UnauthorizedException(401, 'Invalid token');
    }

    req.customerId = decoded.sub;

    next();
  });
};
