import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Country } from './models/country.model';
import { Region } from 'src/region/models/region.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Country, Region]),
  ],
  controllers: [CountryController],
  providers: [CountryService]
})
export class CountryModule { }
