import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VenueType } from './models/venue_type.model';

@Injectable()
export class VenueTypeService {
  constructor(@InjectModel(VenueType) private venueTypeRepo: typeof VenueType) { };

  async create(createVenueTypeDto: CreateVenueTypeDto): Promise<VenueType> {
    const venue_type = await this.venueTypeRepo.create(createVenueTypeDto);
    return venue_type;
  }

  async findAll(): Promise<VenueType[]> {
    const venue_types = await this.venueTypeRepo.findAll({ include: { all: true } });
    return venue_types;
  }

  async findOne(id: number): Promise<VenueType> {
    const venue_type = await this.venueTypeRepo.findByPk(id, { include: { all: true } });
    return venue_type;
  }

  async update(id: number, updateVenueTypeDto: UpdateVenueTypeDto): Promise<VenueType> {
    const venue_type = await this.venueTypeRepo.update(updateVenueTypeDto, { where: { id }, returning: true });
    return venue_type[1][0];
  }

  async remove(id: number): Promise<object> {
    const venue_type = await this.venueTypeRepo.findOne({ where: { id } });
    await this.venueTypeRepo.destroy({ where: { id } });
    return { message: "Deleted successfully", venue_type };
  }
}
