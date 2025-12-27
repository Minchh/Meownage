import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Adopter, AdopterSchema } from 'src/schemas/Adopter.schema'
import { AdoptersService } from './adopters.service'
import { AdoptersController } from './adopters.controller'

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Adopter.name,
				schema: AdopterSchema,
			},
		]),
	],
	providers: [AdoptersService],
	controllers: [AdoptersController],
})

export class AdaptersModule {}
