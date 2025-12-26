import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Adoption } from "src/schemas/Adoption.schema";
import { CreateAdoptionDto } from "./dto/CreateAdoption.dto";

@Injectable()
export class AdoptionsService {

	constructor(@InjectModel(Adoption.name) private AdoptionModel: Model<Adoption>) {}

	createAdoption(createAdoptionDto: CreateAdoptionDto) {
		const newAdoption = new this.AdoptionModel(createAdoptionDto);
		return newAdoption.save();
	}
}