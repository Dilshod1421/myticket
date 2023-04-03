import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Countries")
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) { }

  @ApiOperation({ summary: "Davlat qo'shish" })
  @Post()
  create(@Body() createCountryDto: CreateCountryDto) {
    return this.countryService.create(createCountryDto);
  }

  @ApiOperation({ summary: "Barcha davlatni olish" })
  @Get()
  findAll() {
    return this.countryService.findAll();
  }

  @ApiOperation({ summary: "Bitta davlatni olish" })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.countryService.findOne(id);
  }

  @ApiOperation({ summary: "Bitta davlatni o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCountryDto: UpdateCountryDto) {
    return this.countryService.update(id, updateCountryDto);
  }

  @ApiOperation({ summary: "Bitta davlatni o'chirish" })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.countryService.remove(id);
  }

}
