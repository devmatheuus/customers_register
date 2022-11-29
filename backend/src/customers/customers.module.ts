import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { PrismaService } from '../prisma/prisma.service';
import { CustomerRepository } from './repositories/customer.repository';
import { AuthService } from '../auth/auth.service';

@Module({
  controllers: [CustomersController],
  providers: [AuthService, CustomersService, PrismaService, CustomerRepository],
})
export class CustomersModule {}
