import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Tutor } from './schema/tutor.schema';
import { TutorService } from './tutor.service';
import { CreateTutorDto } from './dto/create-tutor.dto';

@Controller('')
export class TutorController {
  constructor(private readonly tutorService: TutorService) {}

  @Get('tutores')
  async findAll(): Promise<Tutor[]> {
    const tutors = await this.tutorService.findAll();

    return tutors;
  }

  @Post('tutor')
  async createTutor(@Body() tutorCreate: CreateTutorDto): Promise<Tutor> {
    return await this.tutorService.create(tutorCreate);
  }

  @Get('tutor/:id')
  async findById(@Param(':id') idTutor: string): Promise<Tutor> {
    return await this.tutorService.findOne(idTutor);
  }

  @Get('tutor')
  async findByEmail(@Query('email') email: string): Promise<Tutor> {
    return await this.tutorService.findEmail(email);
  }
}
