import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class CreateVenueDto {
    @ApiProperty({ example: "Humo arena", description: "Joy nomi kiritiladi" })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: "Afrosiyob ko'chasi", description: "Joy manzili kiritiladi" })
    @IsNotEmpty()
    @IsString()
    address: string;

    @ApiProperty({ example: "8752+4R5, Tashkent", description: "Joy lokatsiyasi kiritiladi" })
    @IsString()
    location: string;

    @ApiProperty({ example: "myticket.uz", description: "Ilova sayti kiritiladi" })
    @IsString()
    site: string;

    @ApiProperty({ example: "+998719090990", description: "Joyning telefon raqami kiritiladi" })
    @IsPhoneNumber()
    phone: string;

    @ApiProperty({ example: "50 sector, 100 row", description: "Joyning sxemasi kiritiladi" })
    @IsString()
    schema: string;

    @ApiProperty({ example: "1", description: "Joy turining ID si kiritiladi" })
    @IsNotEmpty()
    @IsInt()
    venue_type_id: number;

    @ApiProperty({ example: "1", description: "Joyning hududi ID si kiritiladi" })
    @IsNotEmpty()
    @IsInt()
    region_id: number;

    @ApiProperty({ example: "1", description: "Joyning tumani ID si kiritiladi" })
    @IsNotEmpty()
    @IsInt()
    district_id: number;
}
