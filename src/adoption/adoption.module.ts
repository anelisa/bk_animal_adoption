import { Module } from '@nestjs/common';
import { AdoptionController } from './adoption.controller';
import { AdoptionService } from './adoption.service';
import { TutorModule } from 'src/tutor/tutor.module';
import { PetModule } from 'src/pet/pet.module';

@Module({
  imports: [TutorModule, PetModule],
  controllers: [AdoptionController],
  providers: [AdoptionService],
  exports: [AdoptionService],
})
export class AdoptionModule {}
