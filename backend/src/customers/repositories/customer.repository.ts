import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CustomerEntity } from '../entities/customer.entity';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';

@Injectable()
export class CustomerRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(
    createCustomerDto: CreateCustomerDto,
  ): Promise<CustomerEntity> {
    const customer = await this.prisma.customer.create({
      data: createCustomerDto,
      include: {
        contacts: true,
      },
    });

    return customer;
  }

  public async findOne(id: string): Promise<CustomerEntity> {
    const customer = await this.prisma.customer.findUnique({
      where: { id },
      include: {
        contacts: true,
      },
    });

    return customer;
  }

  public async findAll(): Promise<CustomerEntity[]> {
    const customers = await this.prisma.customer.findMany({
      include: {
        contacts: true,
      },
    });

    return customers;
  }

  public async update(
    id: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<CustomerEntity> {
    const customer = await this.prisma.customer.update({
      where: { id },
      data: updateCustomerDto,
      include: {
        contacts: true,
      },
    });

    return customer;
  }

  public async remove(id: string): Promise<CustomerEntity> {
    const customer = await this.prisma.customer.delete({
      where: { id },
    });

    return customer;
  }
}
