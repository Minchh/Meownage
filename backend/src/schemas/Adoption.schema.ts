import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema({ timestamps: true })
export class Adoption {

	@Prop({ type: Types.ObjectId, ref: "Cat", required: true })
	cat_id: Types.ObjectId;

	@Prop({ type: Types.ObjectId, ref: "Adopter", required: true })
	adopter_id: Types.ObjectId;

	@Prop({ required: true })
	adopted_at: Date;
}

export const AdoptionSchema = SchemaFactory.createForClass(Adoption);