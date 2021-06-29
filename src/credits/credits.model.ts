import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Bank } from "src/banks/banks.model";
import { CreditOffer } from "src/credit-offer/credit-offer.model";


@Table({ tableName: "credits" })
export class Credit extends Model<Credit> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  limit: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  percent: string;

  @ForeignKey(() => Bank)
  @Column({ type: DataType.INTEGER,})
  bankId: number;

  @BelongsTo(() => Bank)
  bank: Bank;

  @HasMany(() => CreditOffer)
  creditOffer: CreditOffer[];

}