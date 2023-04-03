import { Module } from '@nestjs/common';
import { VenueService } from './venue.service';
import { VenueController } from './venue.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Venue } from './models/venue.model';
import { VenueType } from 'src/venue_type/models/venue_type.model';
import { Region } from 'src/region/models/region.model';
import { District } from 'src/district/models/district.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Venue, VenueType, Region, District]),
  ],
  controllers: [VenueController],
  providers: [VenueService],
})
export class VenueModule { }
