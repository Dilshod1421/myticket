import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Country } from './models/country.model';
import { District } from 'src/district/models/district.model';
import { Region } from 'src/region/models/region.model';

@Injectable()
export class CountryService {
  constructor(@InjectModel(Country) private countryRepo: typeof Country) { };

  async create(createCountryDto: CreateCountryDto): Promise<Country> {
    const country = await this.countryRepo.create(createCountryDto);
    return country;
  }

  async findAll(): Promise<Country[]> {
    const country = await this.countryRepo.findAll(
      { nest: true, include: [{ model: Region, include: [District] }] }
    );
    return country;
  }

  async findOne(id: number): Promise<Country> {
    const country = await this.countryRepo.findOne(
      { where: { id }, include: [{ model: Region, include: [District] }] }
    );
    return country;
  }

  async update(id: number, updateCountryDto: UpdateCountryDto): Promise<Country> {
    const country = await this.countryRepo.update(updateCountryDto, { where: { id }, returning: true });
    return country[1][0];
  }

  async remove(id: number): Promise<object> {
    const country = await this.countryRepo.findOne({ where: { id } });
    await this.countryRepo.destroy({ where: { id } });
    return { message: "Deleted successfully", country };
  }

}
