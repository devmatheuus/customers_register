import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerRepository } from './repositories/customer.repository';
import { CustomerEntity } from './entities/customer.entity';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class CustomersService {
  constructor(private readonly repository: CustomerRepository) {}

  public create(createCustomerDto: CreateCustomerDto): Promise<CustomerEntity> {
    return this.repository.create(createCustomerDto);
  }

  public findAll(): Promise<CustomerEntity[]> {
    return this.repository.findAll();
  }

  public findOne(id: string): Promise<CustomerEntity> {
    return this.repository.findOne(id);
  }

  public update(
    id: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<CustomerEntity> {
    return this.repository.update(id, updateCustomerDto);
  }

  public remove(id: string): Promise<CustomerEntity> {
    return this.repository.remove(id);
  }

  public signIn(signInDto: SignInDto): Promise<string> {
    return this.repository.signIn(signInDto);
  }
}
