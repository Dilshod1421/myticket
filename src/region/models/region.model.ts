import { Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Country } from "src/country/models/country.model";
import { District } from "src/district/models/district.model";

interface RegionAttr {
    name: string;
}

@Table({ tableName: "region" })
export class Region extends Model<Region, RegionAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => Country)
    country_id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @HasMany(() => District)
    districts: District[];
}