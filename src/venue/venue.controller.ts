import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Venues')
@Controller('venue')
export class VenueController {
  constructor(private readonly venueService: VenueService) { }

  @ApiOperation({summary: "Yangi joy qo'shish"})
  @Post()
  create(@Body() createVenueDto: CreateVenueDto) {
    return this.venueService.create(createVenueDto);
  }

  @ApiOperation({summary: "Barcha joyni olish"})
  @Get()
  findAll() {
    return this.venueService.findAll();
  }

  @ApiOperation({summary: "Bitta joyni olish"})
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.venueService.findOne(id);
  }

  @ApiOperation({summary: "Bitta joyni o'zgartirish"})
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateVenueDto: UpdateVenueDto) {
    return this.venueService.update(id, updateVenueDto);
  }

  @ApiOperation({summary: "Bitta joyni o'chirish"})
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.venueService.remove(id);
  }
}
