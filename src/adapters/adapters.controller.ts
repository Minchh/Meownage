import { Body, Controller, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common'
import { AdaptersService } from './adapters.service';
import { CreateAdapterDto } from './dto/CreateAdapter.dto';
import { UpdateAdapterDto } from './dto/UpdateAdapter.dto';

@Controller('adapters')
export class AdaptersController {

	constructor(private adaptersService: AdaptersService) {}

	@Post()
	@UsePipes(new ValidationPipe())
	createAdapter(@Body() createAdapterDto: CreateAdapterDto) {
		console.log(createAdapterDto)
		return this.adaptersService.createAdapter(createAdapterDto);
	}

	@Put(":name")
	@UsePipes(new ValidationPipe())
	updateAdapter(@Param("name") name: string, @Body() updateAdapterDto: UpdateAdapterDto) {
		return this.adaptersService.updateAdapterByName(name, updateAdapterDto);
	}

	@Get("by-name")
	getAdapterByName(@Query("name") name: string) {
		return this.adaptersService.getAdapterByName(name);
	}
}