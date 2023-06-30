import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tutor } from './schema/tutor.schema';
import { Model } from 'mongoose';
import { CreateTutorDto } from './dto/create-tutor.dto';

@Injectable()
export class TutorService {
  constructor(@InjectModel(Tutor.name) private tutorModel: Model<Tutor>) {}

  async create(createTutorDto: CreateTutorDto): Promise<Tutor> {
    const createTutor = new this.tutorModel(createTutorDto);

    return createTutor.save();
  }

  async findAll(): Promise<Tutor[]> {
    return this.tutorModel.find().exec();
  }

  async findOne(tutorId: string): Promise<Tutor> {
    return this.tutorModel.findById(tutorId).exec();
  }

  async findEmail(email: string): Promise<Tutor> {
    return this.tutorModel
      .findOne({
        email: email,
      })
      .exec();
  }
}
