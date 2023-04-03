import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateRegionDto {
    @ApiProperty({ example: "Toshkent_viloyati", description: "Bu yerda viloyat kiritiladi" })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: "1", description: "Bu yerda davlat ID si kiritiladi" })
    @IsNotEmpty()
    @IsInt()
    country_id: number;
}
