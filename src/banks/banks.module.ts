import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Client } from 'src/clients/clients.model';
import { ClientsService } from 'src/clients/clients.service';
import { Credit } from 'src/credits/credits.model';
import { CreditsService } from 'src/credits/credits.service';
import { BanksController } from './banks.controller';
import { Bank } from './banks.model';
import { BanksService } from './banks.service';

@Module({
  providers: [BanksService,ClientsService,CreditsService],
  controllers: [BanksController],
  imports: [
    SequelizeModule.forFeature([
      Bank, Client, Credit
    ])
  ],
  exports: [BanksService]
})
export class BanksModule { }
