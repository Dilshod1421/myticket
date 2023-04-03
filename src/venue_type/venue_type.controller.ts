import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VenueTypeService } from './venue_type.service';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Venue-types')
@Controller('venue-type')
export class VenueTypeController {
  constructor(private readonly venueTypeService: VenueTypeService) { }

  @ApiOperation({ summary: "Yangi joy turi qo'shish" })
  @Post()
  create(@Body() createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeService.create(createVenueTypeDto);
  }

  @ApiOperation({ summary: "Barcha joy turini olish" })
  @Get()
  findAll() {
    return this.venueTypeService.findAll();
  }

  @ApiOperation({ summary: "Bitta joy turini olish" })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.venueTypeService.findOne(id);
  }

  @ApiOperation({ summary: "Bitta joy turini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateVenueTypeDto: UpdateVenueTypeDto) {
    return this.venueTypeService.update(id, updateVenueTypeDto);
  }

  @ApiOperation({ summary: "Bitta joy turini o'chirish" })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.venueTypeService.remove(id);
  }
}
