import { ApiProperty } from "@nestjs/swagger";

export class UpdateVenueDto {
    @ApiProperty({ example: "Jar stadium", description: "Joy nomi o'zgartiriladi" })
    name?: string;

    @ApiProperty({ example: "Ulug'bek ko'chasi", description: "Joy manzili o'zgartiriladi" })
    address?: string;

    @ApiProperty({ example: "6450+6R1, Buxoro", description: "Joy lokatsiyasi o'zgartiriladi" })
    location?: string;

    @ApiProperty({ example: "mytickets.com", description: "Ilova sayti o'zgartiriladi" })
    site?: string;

    @ApiProperty({ example: "+998771234567", description: "Joyning telefon raqami o'zgartiriladi" })
    phone?: string;

    @ApiProperty({ example: "40 sector, 200 row", description: "Joyning sxemasi o'zgartiriladi" })
    schema?: string;

    @ApiProperty({ example: "2", description: "Joy turining ID si o'zgartiriladi" })
    venue_type_id?: number;

    @ApiProperty({ example: "2", description: "Joyning hududi ID si o'zgartiriladi" })
    region_id?: number;

    @ApiProperty({ example: "2", description: "Joyning tumani ID si o'zgartiriladi" })
    district_id?: number;
}
