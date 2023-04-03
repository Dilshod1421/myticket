import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { InjectModel } from '@nestjs/sequelize';
import { District } from './models/district.model';

@Injectable()
export class DistrictService {
  constructor(@InjectModel(District) private districtRepo: typeof District) { }

  async create(createDistrictDto: CreateDistrictDto): Promise<District> {
    const district = await this.districtRepo.create(createDistrictDto);
    return district;
  }

  async findAll(): Promise<District[]> {
    const districts = await this.districtRepo.findAll();
    return districts;
  }

  async findOne(id: number): Promise<District> {
    const district = await this.districtRepo.findOne({ where: { id } });
    return district;
  }

  async update(id: number, updateDistrictDto: UpdateDistrictDto): Promise<District> {
    const district = await this.districtRepo.update(updateDistrictDto, { where: { id }, returning: true });
    return district[1][0];
  }

  async remove(id: number): Promise<object> {
    const district = await this.districtRepo.findOne({ where: { id } });
    await this.districtRepo.destroy({ where: { id } });
    return { message: "Deleted successfully", district };
  }

}
