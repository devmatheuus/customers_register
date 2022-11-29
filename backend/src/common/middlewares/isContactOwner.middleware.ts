import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from '../../prisma/prisma.service';
import { UnauthorizedError } from '../errors/types/UnauthorizedError';

@Injectable()
export class isContactOwner implements NestMiddleware {
  constructor(private readonly prisma: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    if (!id) {
      return next();
    }

    const { customerId } = req;

    const contact = await this.prisma.contact.findUnique({
      where: { id },
    });

    if (!contact) {
      throw new NotFoundException('Contact not found.');
    }

    if (contact.customerId !== customerId) {
      throw new UnauthorizedError('Unauthorized.');
    }

    next();
  }
}
