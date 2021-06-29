import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ClientCreationAttrs {
  email: string;
  name: string;
  phone: string;
  numberOfPass: string;
}

@Table({tableName: "clients"})
export class Client extends Model<Client,ClientCreationAttrs> {
  
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  @Column({type: DataType.STRING, allowNull: false})
  phone: string;
  @Column({type: DataType.STRING, allowNull: false})
  name: string;
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  numberOfPass: string;
}