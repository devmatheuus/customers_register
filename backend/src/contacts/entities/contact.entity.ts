import { Contact } from '@prisma/client';

export class ContactEntity implements Contact {
  id: string;
  fullname: string;
  email: string;
  phone: string;
  customerId: string;
}
