import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ConfigModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
