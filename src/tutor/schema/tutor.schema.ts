import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export type TutorDocument = HydratedDocument<Tutor>;

@Schema({ collection: 'tutor' })
export class Tutor {
  _id?: ObjectId;

  @Prop()
  name: string;

  @Prop()
  gender: string;

  @Prop()
  age: number;

  @Prop()
  address: string;

  @Prop()
  phone: string;

  @Prop()
  avatar: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const TutorSchema = SchemaFactory.createForClass(Tutor);
