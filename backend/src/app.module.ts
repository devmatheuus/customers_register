import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, CustomersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
