import { Module } from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsModule } from './clients/clients.module';
import { ConfigModule } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import path from "path";
import { Client } from "./clients/clients.model";

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
      models: [Client],
      autoLoadModels: true,
      synchronize: true,
    }),
    ClientsModule,
  ],
})
export class AppModule {

}