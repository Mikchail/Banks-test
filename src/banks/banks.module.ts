import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Client } from 'src/clients/clients.model';
import { Credit } from 'src/credits/credits.model';
import { BanksController } from './banks.controller';
import { Bank } from './banks.model';
import { BanksService } from './banks.service';

@Module({
  providers: [BanksService],
  controllers: [BanksController],
  imports: [
    SequelizeModule.forFeature([
      Bank, Client, Credit
    ])
  ],
})
export class BanksModule { }
