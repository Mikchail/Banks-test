

import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Client } from "src/clients/clients.model";
import { Credit } from "src/credits/credits.model";

interface BankCreationAttrs {
  title: string;
  limit: number;
}


@Table({ tableName: "banks" })
export class Bank extends Model<Bank, BankCreationAttrs> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  limit: number;

  @HasMany(() => Credit)
  credits: Credit[];

  @HasMany(() => Client)
  clients: Client[];

}