import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { AdoptionsService } from "./adoptions.service";
import { CreateAdoptionDto } from "./dto/CreateAdoption.dto";

@Controller("adoptions")
export class AdoptionsController {

	constructor(private adoptionsService: AdoptionsService) {}

	@Post()
	@UsePipes(new ValidationPipe())
	createAdoption(@Body() createAdoptionDto: CreateAdoptionDto) {
		return this.adoptionsService.createAdoption(createAdoptionDto);
	}
}