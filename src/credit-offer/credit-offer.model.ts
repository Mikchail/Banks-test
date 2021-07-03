

import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Bank } from "src/banks/banks.model";
import { Client } from "src/clients/clients.model";
import { Credit } from "src/credits/credits.model";
import { PaymentShedule } from "src/payment-shedule/payment-shedule.model";


interface CreditOfferCreationAttrs {
  title: string;
  amount: number;
  periodInMonths: number;
  firstPay: number;
  percentSum: number;
  bankId: number;
  creditId: number;
  clientId: number;
}

@Table({ tableName: "credit_offers" })
export class CreditOffer extends Model<CreditOffer,CreditOfferCreationAttrs> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  amount: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  periodInMonths: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  firstPay: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  percentSum: number;

  @ForeignKey(() => Bank)
  @Column({ type: DataType.INTEGER, })
  bankId: number;

  @ForeignKey(() => Credit)
  @Column({ type: DataType.INTEGER, })
  creditId: number;

  @ForeignKey(() => Client)
  @Column({ type: DataType.INTEGER, })
  clientId: number;

  @BelongsTo(() => Bank)
  bank: string;

  @BelongsTo(() => Credit)
  credit: string;

  @BelongsTo(() => Client)
  client: string;

  @HasMany(() => PaymentShedule)
  paymentSchedules: PaymentShedule[];
}