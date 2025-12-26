import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Adapter, AdapterSchema } from 'src/schemas/Adapter.schema'
import { AdaptersService } from './adapters.service'
import { AdaptersController } from './adapters.controller'

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Adapter.name,
				schema: AdapterSchema,
			},
		]),
	],
	providers: [AdaptersService],
	controllers: [AdaptersController],
})

export class AdaptersModule {}
