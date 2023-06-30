import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PetService } from './pet.service';
import { Pet } from './schema/pet.schema';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Controller('')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get('pets')
  async findAll(): Promise<Pet[]> {
    const pets = await this.petService.findAll();
    console.log(pets);

    return pets;
  }

  @Post('pets')
  async createPet(@Body() petCreate: CreatePetDto): Promise<Pet> {
    return await this.petService.create(petCreate);
  }

  @Get('pets/:id')
  async findById(@Param('id') idPet: string): Promise<Pet> {
    return await this.petService.findOne(idPet);
  }

  @Put('pets/:id')
  async updatePetId(
    @Param('id') idPet: string,
    petUpdateDto: UpdatePetDto,
  ): Promise<Pet> {
    return await this.petService.updatePet(idPet, petUpdateDto);
  }
}
