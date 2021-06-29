import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bank } from 'src/banks/banks.model';
import { CreditOffer } from 'src/credit-offer/credit-offer.model';
import { CreditsController } from './credits.controller';
import { Credit } from './credits.model';
import { CreditsService } from './credits.service';

@Module({
  providers: [CreditsService],
  controllers: [CreditsController],
  imports: [
    SequelizeModule.forFeature([
      Bank, Credit, CreditOffer
    ])
  ],
})
export class CreditsModule {}
