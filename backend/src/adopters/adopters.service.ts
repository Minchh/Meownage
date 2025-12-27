import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Adopter } from "src/schemas/Adopter.schema";
import { CreateAdopterDto } from "./dto/CreateAdopter.dto";
import { UpdateAdopterDto } from "./dto/UpdateAdopter.dto";

@Injectable()
export class AdoptersService {
	
	constructor(@InjectModel(Adopter.name) private AdopterModel: Model<Adopter>) {}

	createAdapter(createAdapterDto: CreateAdopterDto) {
		const newAdapter = new this.AdopterModel(createAdapterDto);
		return newAdapter.save();
	}

	updateAdapterByName(name: string, updateAdapterDto: UpdateAdopterDto) {
		return this.AdopterModel.findByIdAndUpdate({ name }, updateAdapterDto, { new: true });
	}

	getAdapterByName(name: string) {
		return this.AdopterModel.findOne({ name });
	}
}