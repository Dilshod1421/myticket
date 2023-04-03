import { Injectable } from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Venue } from './models/venue.model';

@Injectable()
export class VenueService {
  constructor(
    @InjectModel(Venue) private venueRepo: typeof Venue) { };

  async create(createVenueDto: CreateVenueDto): Promise<Venue> {
    const venue = await this.venueRepo.create(createVenueDto);
    return venue;
  }

  async findAll(): Promise<Venue[]> {
    const venues = await this.venueRepo.findAll({ include: { all: true } });
    return venues;
  }

  async findOne(id: number): Promise<Venue> {
    const venue = await this.venueRepo.findByPk(id, { include: { all: true } });
    return venue;
  }

  async update(id: number, updateVenueDto: UpdateVenueDto): Promise<Venue> {
    const venue = await this.venueRepo.update(updateVenueDto, { where: { id }, returning: true });
    return venue[1][0];
  }

  async remove(id: number): Promise<object> {
    const venue = await this.venueRepo.findOne({ where: { id } });
    await this.venueRepo.destroy({ where: { id } });
    return { message: "Deleted successfully", venue };
  }

}
