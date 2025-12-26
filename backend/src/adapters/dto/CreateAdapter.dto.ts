import { IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from 'class-validator'

export class CreateAdapterDto {

	@IsNotEmpty()
	@IsString()
	name: string;

	@IsNotEmpty()
	@IsNumber()
	year: number;

	@IsNotEmpty()
	@IsString()
	@IsPhoneNumber("VN")
	phone: string;

	@IsNotEmpty()
	@IsString()
	address: string;
}