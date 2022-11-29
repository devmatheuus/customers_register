import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactRepository } from './repositories/contact.repository';
import { ContactEntity } from './entities/contact.entity';

@Injectable()
export class ContactsService {
  constructor(private readonly repository: ContactRepository) {}

  public create(
    createContactDto: CreateContactDto,
    customerId: string,
  ): Promise<ContactEntity> {
    return this.repository.create(createContactDto, customerId);
  }

  public findAll(customerId: string): Promise<ContactEntity[]> {
    return this.repository.findAll(customerId);
  }

  public findOne(id: string): Promise<ContactEntity> {
    return this.repository.findOne(id);
  }

  public update(
    customerId: string,
    updateContactDto: UpdateContactDto,
  ): Promise<ContactEntity> {
    return this.repository.update(customerId, updateContactDto);
  }

  public remove(customerId: string): Promise<void> {
    return this.repository.remove(customerId);
  }
}
