import {
  HttpException,
  Injectable,
  PreconditionFailedException,
} from '@nestjs/common';
import { PetService } from 'src/pet/pet.service';
import { Pet } from 'src/pet/schema/pet.schema';
import { TutorService } from 'src/tutor/tutor.service';

@Injectable()
export class AdoptionService {
  constructor(
    private petService: PetService,
    private tutorService: TutorService,
  ) {}

  async createAdoption(idTutor: string, idPet: string): Promise<Pet> {
    const pet = await this.petService.findOne(idPet);
    const tutor = await this.tutorService.findOne(idTutor);

    if (!pet) {
      throw new HttpException('pet nao encontrado', 404);
    }

    if (!tutor) {
      throw new HttpException('Tutor nao encontrado', 404);
    }

    if (pet.adoption && pet.idTutor !== null) {
      throw new PreconditionFailedException('Pet adotado');
    }

    const petAdoption = {
      adoption: true,
      idTutor: idTutor,
    };

    return await this.petService.updatePet(idPet, petAdoption);
  }
}
