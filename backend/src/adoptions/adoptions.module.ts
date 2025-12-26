import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Adoption, AdoptionSchema } from "src/schemas/Adoption.schema";
import { AdoptionsService } from "./adoptions.service";
import { AdoptionsController } from "./adoptions.controller";

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Adoption.name,
				schema: AdoptionSchema,
			},
		]),
	],
	providers: [AdoptionsService],
	controllers: [AdoptionsController],
})

export class AdoptionsModule {}