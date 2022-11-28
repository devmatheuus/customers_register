import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { PrismaService } from '../prisma/prisma.service';
import { CustomerRepository } from './repositories/customer.repository';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService, PrismaService, CustomerRepository],
})
export class CustomersModule {}
