import { ApiProperty } from "@nestjs/swagger";

export class UpdateCountryDto {
    @ApiProperty({ example: "Tajikistan", description: "Bu yerda davlat nomini o'zgartirish mumkin" })
    name?: string;
}
