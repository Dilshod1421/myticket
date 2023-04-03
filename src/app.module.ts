import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/models/user.model';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { VenueModule } from './venue/venue.module';
import { VenueTypeModule } from './venue_type/venue_type.module';
import { DistrictModule } from './district/district.module';
import { RegionModule } from './region/region.module';
import { Venue } from './venue/models/venue.model';
import { VenueType } from './venue_type/models/venue_type.model';
import { District } from './district/models/district.model';
import { Region } from './region/models/region.model';
import { CountryModule } from './country/country.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static')
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [
        User,
        Venue,
        VenueType,
        District,
        Region,
      ],
      autoLoadModels: true,
      logging: true,
    }),
    AuthModule,
    VenueModule,
    VenueTypeModule,
    DistrictModule,
    RegionModule,
    CountryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
