import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateCatDto {

	@IsOptional()
	@IsString()
	name?: string;

	@IsOptional()
	@IsNumber()
	year?: number;

	@IsOptional()
	@IsEnum(["male", "female"])
	gender?: string;

	@IsOptional()
	@IsString()
	breed?: string;

	@IsOptional()
	@IsBoolean()
	vaccinated?: boolean;

	@IsOptional()
	@IsBoolean()
	adopted?: boolean;

	@IsOptional()
	@IsString()
	image_url?: string;
}