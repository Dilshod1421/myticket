import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { District } from "src/district/models/district.model";
import { Region } from "src/region/models/region.model";
import { VenueType } from "src/venue_type/models/venue_type.model";

interface VenueAttr {
    name: string;
    address: string;
    location: string;
    site: string;
    phone: string;
    schema: string;
}

@Table({ tableName: 'venue' })
export class Venue extends Model<Venue, VenueAttr> {
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

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    address: string;

    @Column({
        type: DataType.STRING,
    })
    location: string;

    @Column({
        type: DataType.STRING,
    })
    site: string;

    @Column({
        type: DataType.STRING,
    })
    schema: string;

    @ForeignKey(() => VenueType)
    venue_type_id: number;

    @BelongsTo(() => VenueType)
    venu_type: VenueType;

    @ForeignKey(() => Region)
    @Column({
        type: DataType.INTEGER
    })
    region_id: number;

    @BelongsTo(() => Region)
    region: Region;

    @ForeignKey(() => District)
    @Column({
        type: DataType.INTEGER,
    })
    district_id: number;

    @BelongsTo(() => District)
    district: District;
}