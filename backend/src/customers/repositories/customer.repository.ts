import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CustomerEntity } from '../entities/customer.entity';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';

import * as bcrypt from 'bcrypt';
import { AuthService } from '../../auth/auth.service';
import { SignInDto } from '../dto/sign-in.dto';
import { BadRequestError } from '../../common/errors/types/BadRequestError';

@Injectable()
export class CustomerRepository {
  constructor(
    private readonly prisma: PrismaService,

    private readonly authService: AuthService,
  ) {}

  public async create(
    createCustomerDto: CreateCustomerDto,
  ): Promise<CustomerEntity> {
    const { password } = createCustomerDto;

    createCustomerDto.password = await bcrypt.hash(password, 10);

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

  public async signIn(signInDto: SignInDto): Promise<string> {
    const { email, password } = signInDto;

    const customer = await this.findByEmail(email);

    await this.checkPassword(password, customer);

    const token = await this.authService.createAccessToken(customer.id);

    return token;
  }

  private async findByEmail(email: string): Promise<CustomerEntity> {
    const customer = await this.prisma.customer.findUnique({
      where: { email },
    });

    if (!customer) {
      throw new BadRequestError('Invalid email or password.');
    }

    return customer;
  }

  private async checkPassword(
    password: string,
    customer: CustomerEntity,
  ): Promise<boolean> {
    const passwordMatch = await bcrypt.compare(password, customer.password);

    if (!passwordMatch) {
      throw new BadRequestError('Invalid email or password.');
    }

    return passwordMatch;
  }
}
