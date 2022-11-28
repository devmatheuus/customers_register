import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [ConfigModule, CustomersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
