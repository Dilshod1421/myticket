import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Venue } from "src/venue/models/venue.model";

interface VenueTypeAttr {
    name: string;
}

@Table({ tableName: "venue_type" })
export class VenueType extends Model<VenueType, VenueTypeAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
    })
    name: string;

    @HasMany(() => Venue)
    venues: Venue[];
}