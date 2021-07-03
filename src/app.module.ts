import { Module } from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsModule } from './clients/clients.module';
import { ConfigModule } from "@nestjs/config";
import { Client } from "./clients/clients.model";
import { CreditsModule } from './credits/credits.module';
import { BanksModule } from './banks/banks.module';
import { CreditOfferModule } from './credit-offer/credit-offer.module';
import { PaymentSheduleModule } from './payment-shedule/payment-shedule.module';
import { Bank } from "./banks/banks.model";
import { Credit } from "./credits/credits.model";
import { PaymentShedule } from "./payment-shedule/payment-shedule.model";
import { CreditOffer } from "./credit-offer/credit-offer.model";
@Module({
  controllers: [],
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
  providers: [],
})
export class AppModule {

}
