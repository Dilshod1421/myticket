import { ApiProperty } from "@nestjs/swagger";

export class UpdateRegionDto {
    @ApiProperty({ example: "Buxoro_viloyati", description: "Bu yerda viloyat nomi o'zgartiriladi" })
    name?: string;

    @ApiProperty({ example: "2", description: "Bu yerda davlat ID si o'zgartiriladi" })
    country_id?: number;
}
