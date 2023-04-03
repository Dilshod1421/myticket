import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionController } from './region.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Region } from './models/region.model';
import { Country } from 'src/country/models/country.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Region, Country]),
  ],
  controllers: [RegionController],
  providers: [RegionService]
})
export class RegionModule { }
