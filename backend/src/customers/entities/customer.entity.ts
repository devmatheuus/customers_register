import { Customer } from '@prisma/client';

export class CustomerEntity implements Customer {
  fullname: string;
  email: string;
  phone: string;
  createdAt: Date;
  readonly id: string;
}
