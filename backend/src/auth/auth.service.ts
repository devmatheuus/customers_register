import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtPayload } from './models/jwtPayload.model';
import { CustomerEntity } from '../customers/entities/customer.entity';
import { sign } from 'jsonwebtoken';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  public async validateCustomer(
    jwtPayload: JwtPayload,
  ): Promise<CustomerEntity> {
    const { customerId } = jwtPayload;

    const customer = await this.prisma.customer.findUnique({
      where: { id: customerId },
    });

    if (!customer) {
      throw new NotFoundException('Customer not found.');
    }

    return customer;
  }

  public async createAccessToken(customerId: string): Promise<string> {
    return sign({ customerId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
      subject: customerId,
    });
  }
}
