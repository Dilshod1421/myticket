import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Regions')
@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) { }

  @ApiOperation({ summary: "Viloyat qo'shish" })
  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @ApiOperation({ summary: "Barcha viloyatni olish" })
  @Get()
  findAll() {
    return this.regionService.findAll();
  }

  @ApiOperation({ summary: "Bitta viloyatni olish" })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.regionService.findOne(id);
  }

  @ApiOperation({ summary: "Bitta viloyatni o'zgartitish" })
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(id, updateRegionDto);
  }

  @ApiOperation({ summary: "Bitta viloyatni o'chirish" })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.regionService.remove(id);
  }
}
