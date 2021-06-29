import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './clients.model';
import { ClientsController } from './clients.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CreditOffer } from 'src/credit-offer/credit-offer.model';
import { Bank } from 'src/banks/banks.model';

@Module({
  providers: [ClientsService],
  controllers: [ClientsController],
  imports: [
    SequelizeModule.forFeature([Client,CreditOffer,Bank])
  ],
  exports: []
})
export class ClientsModule {}
