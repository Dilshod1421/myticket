import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserAttr {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    hashed_password: string;
    is_active: boolean;
    hashed_refresh_token: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    first_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    last_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    phone_number: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    hashed_password: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    is_active: boolean;

    @Column({
        type: DataType.STRING,
    })
    hashed_refresh_token: string;
}