import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Adopter {

	@Prop({ unique: true, required: true })
	name: string;

	@Prop({ required: true })
	year: number;

	@Prop({ required: true })
	phone: string;

	@Prop({ required: true })
	address: string;
}

export const AdopterSchema = SchemaFactory.createForClass(Adopter);