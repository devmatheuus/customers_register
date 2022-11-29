import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [ConfigModule, CustomersModule, AuthModule, ContactsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
