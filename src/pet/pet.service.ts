import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Pet } from './schema/pet.schema';
import { CreatePetDto } from './dto/create-pet.dto';

@Injectable()
export class PetService {
  // eslint-disable-next-line prettier/prettier
  constructor(@InjectModel(Pet.name) private petModel: Model<Pet>) {}

  async create(createPetDto: CreatePetDto): Promise<Pet> {
    const createPet = new this.petModel(createPetDto);
    return createPet.save();
  }

  async findAll(): Promise<Pet[]> {
    return this.petModel.find().exec();
  }

  async findOne(petId: string): Promise<Pet> {
    return this.petModel.findOne({ _id: new Types.ObjectId(petId) });
  }

  async updatePet(
    petId: string,
    updatePet: Partial<UpdatePetDto>,
  ): Promise<Pet> {
    const updateResult = await this.petModel.updateOne(
      {
        _id: new Types.ObjectId(petId),
      },
      updatePet,
    );

    console.log('update', updateResult);
    const updated = await this.findOne(petId);

    if (!updatePet) {
      throw new NotFoundException(`Pet com o id: ${petId} não enconstrado`);
    }

    return updated;
  }
}

export interface UpdatePetDto {
  breed: string;
  species: string;
  name: string;
  age: number;
  weight: number;
  colorFur: string;
  adoption: boolean;
  idTutor: string;
  gender: string;
}
