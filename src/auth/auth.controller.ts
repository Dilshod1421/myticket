import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RegisterDto } from './dto/register.dto';
import { Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { CookieGetter } from 'src/decorators/cookieGetter.decorator';

@ApiTags('auth/users')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @ApiOperation({ summary: "Registration", description: "Foydalanuvchi ro'yaxatdan o'tadi" })
  @Post('signup')
  register(@Body() registerDto: RegisterDto, @Res({ passthrough: true }) res: Response) {
    return this.authService.register(registerDto, res);
  }

  @ApiOperation({ summary: "Login", description: "Foydalanuvchi logindan o'tadi" })
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) res: Response) {
    return this.authService.login(loginDto, res);
  }

  @ApiOperation({ summary: "Logout", description: "Foydalanuvchi saytdan chiqadi" })
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@CookieGetter('refresh_token') refreshToken: string, @Res({ passthrough: true }) res: Response) {
    return this.authService.logout(refreshToken, res);
  }
  
}
