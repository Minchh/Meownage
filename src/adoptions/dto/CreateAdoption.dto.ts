import { IsDateString, IsMongoId, isNotEmpty, IsNotEmpty } from "class-validator";

export class CreateAdoptionDto {

	@IsNotEmpty()
	@IsMongoId()
	cat_id: string;

	@IsNotEmpty()
	@IsMongoId()
	adopter_id: string;

	@IsNotEmpty()
	@IsDateString()
	adopted_at: Date;
}