import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { PrismaService } from '../prisma/prisma.service';
import { ContactRepository } from './repositories/contact.repository';
import { isValidUUID } from '../common/middlewares/isValidUUID.middleware';
import { authTokenMiddleware } from '../common/middlewares/authToken.middleware';
import { RequestMethod } from '@nestjs/common/enums';
import { isContactOwner } from '../common/middlewares/isContactOwner.middleware';

@Module({
  controllers: [ContactsController],
  providers: [ContactsService, PrismaService, ContactRepository],
})
export class ContactsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(authTokenMiddleware, isValidUUID)
      .forRoutes(ContactsController)
      .apply(isContactOwner)
      .exclude({ path: 'contacts', method: RequestMethod.POST })
      .forRoutes(ContactsController);
  }
}
