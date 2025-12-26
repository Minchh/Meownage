import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Cat {

	@Prop({ unique: true, required: true })
	name: string;

	@Prop({ required: true })
	year: number;

	@Prop({ required: true, enum: ["male", "female"]})
	gender: string;

	@Prop({ required: true })
	breed: string;

	@Prop({ required: true })
	vaccinated: boolean;

	@Prop({ required: true })
	adopted: boolean;

	@Prop({ required: true })
	image_url: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);