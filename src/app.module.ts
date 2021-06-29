import { Module } from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsModule } from './clients/clients.module';
import { ConfigModule } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import path from "path";
import { Client } from "./clients/clients.model";
import { CreditsService } from './credits/credits.service';
import { CreditsController } from './credits/credits.controller';
import { CreditsModule } from './credits/credits.module';
import { BanksService } from './banks/banks.service';
import { BanksModule } from './banks/banks.module';
import { CreditOfferController } from './credit-offer/credit-offer.controller';
import { CreditOfferModule } from './credit-offer/credit-offer.module';
import { PaymentSheduleService } from './payment-shedule/payment-shedule.service';
import { PaymentSheduleController } from './payment-shedule/payment-shedule.controller';
import { PaymentSheduleModule } from './payment-shedule/payment-shedule.module';
import { Bank } from "./banks/banks.model";
import { Credit } from "./credits/credits.model";
import { PaymentShedule } from "./payment-shedule/payment-shedule.model";
import { CreditOffer } from "./credit-offer/credit-offer.model";

@Module({
  controllers: [CreditsController, CreditOfferController, PaymentSheduleController],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: path.resolve(__dirname, 'static'),
    // }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Bank, Client, Credit, PaymentShedule, CreditOffer],
      autoLoadModels: true,
      synchronize: true,
    }),
    ClientsModule,
    CreditsModule,
    BanksModule,
    CreditOfferModule,
    PaymentSheduleModule,
  ],
  providers: [CreditsService, BanksService, PaymentSheduleService],
})
export class AppModule {

}