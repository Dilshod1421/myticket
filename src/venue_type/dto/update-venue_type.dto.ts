import { ApiProperty } from "@nestjs/swagger";

export class UpdateVenueTypeDto {
    @ApiProperty({ example: "Arena", description: "Joyning turi o'zgartiriladi" })
    name?: string;
}
