import { Body, Controller, Post } from '@nestjs/common';
import { AdoptionService } from './adoption.service';
import { AdoptionDto } from './dto/adoptionDto.dto';

@Controller('')
export class AdoptionController {
  constructor(private readonly adoptionService: AdoptionService) {}

  @Post('adoption')
  async createAdoption(@Body() adoptionDto: AdoptionDto): Promise<any> {
    return this.adoptionService.createAdoption(
      adoptionDto.idTutor,
      adoptionDto.idPet,
    );
  }
}
