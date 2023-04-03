import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateDistrictDto {
    @ApiProperty({ example: "Bekobod_tumani", description: "Bu yerda tuman nomi kiritiladi" })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: "1", description: "Bu yerda viloyat ID si kiritiladi" })
    @IsNotEmpty()
    @IsInt()
    region_id: number;
}
