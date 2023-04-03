import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsStrongPassword, MinLength } from "class-validator";

export class LoginDto {
    @ApiProperty({ example: "example@gmail.com", description: "Foydalanuvchi email kiritadi" })
    @IsEmail()
    email: string;

    @ApiProperty({ example: "Uzb@k!$t0n", description: "Foydalanuvchi password kiritadi" })
    @IsStrongPassword()
    @MinLength(8)
    password: string;
}
