import { BadRequestException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export const isValidUUID = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  z.string().regex;
  const urlParamSchema = z
    .string()
    .regex(
      /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    );

  const { id } = req.params;

  const result = urlParamSchema.safeParse(id);

  if (!id || result.success) {
    return next();
  }

  throw new BadRequestException('Invalid UUID');
};
