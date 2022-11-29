import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { PrismaService } from '../prisma/prisma.service';
import { CustomerRepository } from './repositories/customer.repository';
import { AuthService } from '../auth/auth.service';
import { authTokenMiddleware } from '../common/middlewares/authToken.middleware';
import { isValidUUID } from '../common/middlewares/isValidUUID.middleware';
import { isOwnerMiddleware } from '../common/middlewares/isOwner.middleware';

@Module({
  exports: [PrismaService],
  controllers: [CustomersController],
  providers: [AuthService, CustomersService, PrismaService, CustomerRepository],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(isValidUUID, authTokenMiddleware, isOwnerMiddleware)
      .exclude(
        { path: 'customers', method: RequestMethod.GET },
        { path: 'customers', method: RequestMethod.POST },
        { path: 'customers/signin', method: RequestMethod.ALL },
      )
      .forRoutes(CustomersController);
  }
}
