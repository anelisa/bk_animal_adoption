import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tutor, TutorSchema } from './schema/tutor.schema';
import { TutorController } from './tutor.controller';
import { TutorService } from './tutor.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tutor.name, schema: TutorSchema }]),
  ],
  controllers: [TutorController],
  providers: [TutorService],
  exports: [TutorService],
})
export class TutorModule {}
