import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export type PetDocument = HydratedDocument<Pet>;

@Schema({ collection: 'pet' })
export class Pet {
  _id: ObjectId;

  @Prop()
  breed: string;

  @Prop()
  species: string;

  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  weight: number;

  @Prop()
  colorFur: string;

  @Prop()
  adoption: boolean;

  @Prop()
  idTutor: string;

  @Prop()
  gender: string;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
