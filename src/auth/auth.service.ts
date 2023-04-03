import {
  Injectable,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { User } from './models/user.model';
import { InjectModel } from '@nestjs/sequelize';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { RegisterDto } from './dto/register.dto';
import { MailService } from 'src/mail/mail.service';
export interface Tokens {
  access_token: string;
  refresh_token: string
};


@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private authRepository: typeof User,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
  ) { };


  async register(registerDto: RegisterDto, res: Response) {
    const condidate = await this.authRepository.findOne({ where: { email: registerDto.email } });
    if (condidate) {
      throw new BadRequestException("Email already registered!");
    };
    if (registerDto.password !== registerDto.confirm_password) {
      throw new BadRequestException('Password is not match!');
    };
    const hashed_password = await bcrypt.hash(registerDto.password, 7);
    const user = await this.authRepository.create({ ...registerDto, hashed_password });
    const tokens = await this.generateToken(user);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const user_updated = await this.authRepository.update(
      { hashed_refresh_token }, { where: { id: user.id }, returning: true }
    );
    await this.mailService.sendUserConfirmation(user_updated[1][0]);
    return this.responseToUser(tokens, user_updated[1][0], res, "User registrated successfully");
  }


  async login(loginDto: LoginDto, res: Response) {
    const { email, password } = loginDto;
    const user = await this.authRepository.findOne({ where: { email } });
    if (!user) {
      throw new BadRequestException("User not found!");
    };
    const checkPassword = await bcrypt.compare(password, user.hashed_password);
    if (!checkPassword) {
      throw new BadRequestException("Password incorrect!");
    };
    const tokens = await this.generateToken(user);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const user_updated = await this.authRepository.update(
      { hashed_refresh_token }, { where: { id: user.id }, returning: true }
    );
    return this.responseToUser(tokens, user_updated[1][0], res, 'User logged in successfully');
  }


  async logout(refreshToken: string, res: Response) {
    const user_data = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY
    });
    if (!user_data) {
      throw new ForbiddenException("User not logged in!");
    };
    const user_updated = await this.authRepository.update(
      { hashed_refresh_token: null }, { where: { id: user_data.id }, returning: true },
    );
    res.clearCookie('refresh_token');
    return { message: "User logged out successfully", user: user_updated[1][0] };
  }


  private async generateToken(user: User) {
    const payload = { id: user.id, is_active: user.is_active };
    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME
      })
    ]);
    return { access_token, refresh_token };
  }


  async responseToUser(tokens: Tokens, user: User, res: Response, message: string) {
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true
    });
    const response = {
      message: `${message}`,
      token: tokens.access_token,
      user,
    };
    return response;
  }

}
