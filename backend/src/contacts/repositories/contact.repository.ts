import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

import { CreateContactDto } from '../dto/create-contact.dto';
import { NotFoundError } from '../../common/errors/types/NotFoundError';
import { Prisma } from '@prisma/client';
import { ContactEntity } from '../entities/contact.entity';
import { UpdateContactDto } from '../dto/update-contact.dto';

@Injectable()
export class ContactRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(
    createContactDto: CreateContactDto,
    customerId: string,
  ): Promise<ContactEntity> {
    const customer = await this.prisma.customer.findUnique({
      where: { id: customerId },
    });

    if (!customer) {
      throw new NotFoundError('Customer not found');
    }

    const data: Prisma.ContactCreateInput = {
      ...createContactDto,
      customer: {
        connect: {
          id: customerId,
        },
      },
    };

    const contact = await this.prisma.contact.create({
      data,
      include: {
        customer: {
          select: {
            email: true,
            fullname: true,
            phone: true,
          },
        },
      },
    });

    return contact;
  }

  public async findOne(id: string): Promise<ContactEntity> {
    const contact = await this.prisma.contact.findUnique({
      where: { id },
      include: {
        customer: {
          select: {
            email: true,
            fullname: true,
            phone: true,
          },
        },
      },
    });

    if (!contact) {
      throw new NotFoundError('Contact not found.');
    }

    return contact;
  }

  public async findAll(customerId: string): Promise<ContactEntity[]> {
    const contacts = await this.prisma.contact.findMany({
      where: { customer: { id: customerId } },
      include: {
        customer: {
          select: {
            email: true,
            fullname: true,
            phone: true,
          },
        },
      },
    });

    return contacts;
  }

  public async update(
    customerId: string,
    updateContactDto: UpdateContactDto,
  ): Promise<ContactEntity> {
    const contact = await this.prisma.contact.update({
      where: { id: customerId },
      data: updateContactDto,
      include: {
        customer: {
          select: {
            email: true,
            fullname: true,
            phone: true,
          },
        },
      },
    });

    return contact;
  }

  public async remove(customerId: string): Promise<void> {
    await this.prisma.contact.delete({
      where: { id: customerId },
    });
  }
}
