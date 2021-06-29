import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PaymentSheduleController } from './payment-shedule.controller';
import { PaymentShedule } from './payment-shedule.model';
import { CreditOffer } from 'src/credit-offer/credit-offer.model';
import { PaymentSheduleService } from './payment-shedule.service';

@Module({
  providers: [PaymentSheduleService],
  controllers: [PaymentSheduleController],
  imports: [
    SequelizeModule.forFeature([
      CreditOffer, PaymentShedule
    ])
  ],
})
export class PaymentSheduleModule {}
