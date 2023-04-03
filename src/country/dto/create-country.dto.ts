import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCountryDto {
    @ApiProperty({ example: "Uzbekistan", description: "Bu yerda davlat nomi kiritiladi" })
    @IsNotEmpty()
    @IsString()
    name: string;
}
