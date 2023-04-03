import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Region } from "src/region/models/region.model";

interface CountryAttr {
    name: string;
}
@Table({ tableName: "country" })
export class Country extends Model<Country, CountryAttr> {
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
    name: string;

    @HasMany(() => Region)
    regions: Region[];
}