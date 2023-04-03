import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Districts')
@Controller('district')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @ApiOperation({summary: "Tuman qo'shish"})
  @Post()
  create(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtService.create(createDistrictDto);
  }

  @ApiOperation({summary: "Barcha tumanni olish"})
  @Get()
  findAll() {
    return this.districtService.findAll();
  }

  @ApiOperation({summary: "Bitta tumanni olish"})
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.districtService.findOne(id);
  }

  @ApiOperation({summary: "Bitta tumanni o'zgartirish"})
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateDistrictDto: UpdateDistrictDto) {
    return this.districtService.update(id, updateDistrictDto);
  }

  @ApiOperation({summary: "Bitta tumanni o'chirish"})
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.districtService.remove(id);
  }
}
