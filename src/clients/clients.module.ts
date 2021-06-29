import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './clients.model';
import { ClientsController } from './clients.controller';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  providers: [ClientsService],
  controllers: [ClientsController],
  imports: [
    SequelizeModule.forFeature([Client])
  ]
})
export class ClientsModule {}
