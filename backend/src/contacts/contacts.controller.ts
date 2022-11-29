import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Request } from 'express';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  create(@Req() req: Request, @Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(createContactDto, req.customerId);
  }

  @Get()
  findAll(@Req() req: Request) {
    return this.contactsService.findAll(req.customerId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') customerId: string,
    @Body() updateContactDto: UpdateContactDto,
  ) {
    return this.contactsService.update(customerId, updateContactDto);
  }

  @Delete(':id')
  remove(@Param('id') customerId: string) {
    return this.contactsService.remove(customerId);
  }
}
