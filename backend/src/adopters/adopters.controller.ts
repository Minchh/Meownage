import { Body, Controller, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common'
import { AdoptersService } from './adopters.service';
import { CreateAdopterDto } from './dto/CreateAdopter.dto';
import { UpdateAdopterDto } from './dto/UpdateAdopter.dto';

@Controller('adopters')
export class AdoptersController {

	constructor(private adaptersService: AdoptersService) {}

	@Post()
	@UsePipes(new ValidationPipe())
	createAdapter(@Body() createAdapterDto: CreateAdopterDto) {
		console.log(createAdapterDto)
		return this.adaptersService.createAdapter(createAdapterDto);
	}

	@Put(":name")
	@UsePipes(new ValidationPipe())
	updateAdapter(@Param("name") name: string, @Body() updateAdapterDto: UpdateAdopterDto) {
		return this.adaptersService.updateAdapterByName(name, updateAdapterDto);
	}

	@Get("by-name")
	getAdapterByName(@Query("name") name: string) {
		return this.adaptersService.getAdapterByName(name);
	}
}