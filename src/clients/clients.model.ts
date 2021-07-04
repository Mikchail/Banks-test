import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Bank } from "src/banks/banks.model";
import { CreditOffer } from "src/credit-offer/credit-offer.model";

interface ClientCreationAttrs {
  email: string;
  name: string;
  phone: string;
  passportNumber: number;
  bankId: number;
}

@Table({ tableName: "clients" })
export class Client extends Model<Client, ClientCreationAttrs> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  phone: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.INTEGER, unique: true, allowNull: false })
  passportNumber: number;

  @ForeignKey(() => Bank)
  @Column({ type: DataType.INTEGER,})
  bankId: number;

  @BelongsTo(() => Bank)
  bank: Bank;

  @HasMany(() => CreditOffer)
  creditOffers: CreditOffer[];
}