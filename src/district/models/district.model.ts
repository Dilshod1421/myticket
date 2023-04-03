import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Region } from "src/region/models/region.model";

interface DistrictAttr {
    name: string;
}

@Table({ tableName: "district" })
export class District extends Model<District, DistrictAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => Region)
    region_id: number;

    @Column({
        type: DataType.STRING,
    })
    name: string;
}
