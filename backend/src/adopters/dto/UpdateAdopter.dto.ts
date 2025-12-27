import { IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class UpdateAdopterDto {
	
	@IsOptional()
	@IsString()
	name?: string;

	@IsOptional()
	@IsNumber()
	year?: number;

	@IsOptional()
	@IsString()
	@IsPhoneNumber("VN")
	phone?: string;

	@IsOptional()
	@IsString()
	address?: string;
}