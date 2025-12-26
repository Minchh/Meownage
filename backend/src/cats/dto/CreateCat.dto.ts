import { IsBoolean, IsEnum, isNotEmpty, IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";

export class CreateCatDto {

	@IsNotEmpty()
	@IsString()
	name: string;

	@IsNotEmpty()
	@IsNumber()
	year: number;

	@IsNotEmpty()
	@IsEnum(["male", "female"])
	gender: string;

	@IsNotEmpty()
	@IsString()
	breed: string;

	@IsNotEmpty()
	@IsBoolean()
	vaccinated: boolean;

	@IsNotEmpty()
	@IsBoolean()
	adopted: boolean;

	@IsNotEmpty()
	@IsString()
	image_url: string;
}