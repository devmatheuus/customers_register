import 'dotenv/config';
import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { AuthModule } from './auth/auth.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [CustomersModule, AuthModule, ContactsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
