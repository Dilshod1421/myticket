import { ApiProperty } from "@nestjs/swagger";

export class UpdateDistrictDto {
    @ApiProperty({ example: "Angren_tumani", description: "Bu yerda tuman nomi o'zgartiriladi" })
    name?: string;

    @ApiProperty({ example: "2", description: "Bu yerda viloyat ID si o'zgartiriladi" })
    region_id?: number;
}
