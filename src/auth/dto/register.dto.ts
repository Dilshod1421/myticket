import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsStrongPassword, MinLength, IsNotEmpty, IsPhoneNumber } from "class-validator";

export class RegisterDto {
    @ApiProperty({ example: "John", description: "Foydalanuvchi ism kiritadi" })
    @IsNotEmpty()
    first_name: string;

    @ApiProperty({ example: "Doe", description: "Foydalanuvchi familiya kiritadi" })
    @IsNotEmpty()
    last_name: string;

    @ApiProperty({ example: "+998901234567", description: "Foydalanuvchi telefon raqamini kiritadi" })
    @IsPhoneNumber()
    phone_number: string;

    @ApiProperty({ example: "john@gmail.com", description: "Foydalanuvchi email kiritadi" })
    @IsEmail()
    email: string;

    @ApiProperty({ example: "Uzb@k!$t0n", description: "Foydalanuvchi password kiritadi" })
    @IsStrongPassword()
    @MinLength(8)
    password: string;

    @ApiProperty({ example: "Uzb@k!$t0n", description: "Foydalanuvchi passwordni qayta kiritadi" })
    @IsNotEmpty()
    confirm_password: string;
}
