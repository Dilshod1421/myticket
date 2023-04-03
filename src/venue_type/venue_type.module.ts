import { Module } from '@nestjs/common';
import { VenueTypeService } from './venue_type.service';
import { VenueTypeController } from './venue_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { VenueType } from './models/venue_type.model';
import { Venue } from 'src/venue/models/venue.model';

@Module({
  imports: [
    SequelizeModule.forFeature([VenueType, Venue]),
  ],
  controllers: [VenueTypeController],
  providers: [VenueTypeService],
  exports: [VenueTypeService]
})
export class VenueTypeModule { }
