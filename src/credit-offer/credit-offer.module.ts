import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bank } from 'src/banks/banks.model';
import { Client } from 'src/clients/clients.model';
import { Credit } from 'src/credits/credits.model';
import { CreditOfferController } from './credit-offer.controller';
import { CreditOffer } from './credit-offer.model';
import { CreditOfferService } from './credit-offer.service';

@Module({
  providers: [CreditOfferService],
  controllers: [CreditOfferController],
  imports: [
    SequelizeModule.forFeature([
      Bank, Client, Credit, CreditOffer
    ])
  ],
})
export class CreditOfferModule {}
