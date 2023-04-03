import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateVenueTypeDto {
    @ApiProperty({ example: "Arena", description: "Joyning turi kiritiladi" })
    @IsNotEmpty()
    @IsString()
    name: string;
}
