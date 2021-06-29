

import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { CreditOffer } from "src/credit-offer/credit-offer.model";

@Table({ tableName: "payment_shedule" })
export class PaymentShedule extends Model<PaymentShedule> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.DATE, allowNull: false })
  paymentDate: Date;

  @Column({ type: DataType.INTEGER, allowNull: false })
  paymentAmount: number;

  @Column({type: DataType.INTEGER, allowNull: false})
  amountOfTheBody: number;

  @Column({type: DataType.INTEGER, allowNull: false})
  remains: number;
  
  @ForeignKey(() => CreditOffer)
  @Column({ type: DataType.INTEGER,})
  creditOfferId: number;
 
  @BelongsTo(() => CreditOffer)
  creditOffer: CreditOffer;

}