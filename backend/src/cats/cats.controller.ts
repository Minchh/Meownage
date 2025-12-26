import { Body, Controller, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./dto/CreateCat.dto";
import { UpdateCatDto } from "./dto/UpdateCat.dto";

@Controller("cats")
export class CatsController {

	constructor(private catsService: CatsService) {}

	@Post()
	@UsePipes(new ValidationPipe())
	createCat(@Body() createCatDto: CreateCatDto) {
		return this.catsService.createCat(createCatDto);
	}

	@Put(":name")
	@UsePipes(new ValidationPipe())
	updateCat(@Param("name") name: string, @Body() updateCatDto: UpdateCatDto) {
		return this.catsService.updateCatByName(name, updateCatDto);
	}

	@Get("by-name")
	getCatByName(@Query("name") name: string) {
		return this.catsService.getCatByName(name);
	}
}