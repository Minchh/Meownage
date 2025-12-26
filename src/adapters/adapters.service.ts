import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Adapter } from "src/schemas/Adapter.schema";
import { CreateAdapterDto } from "./dto/CreateAdapter.dto";
import { UpdateAdapterDto } from "./dto/UpdateAdapter.dto";

@Injectable()
export class AdaptersService {
	
	constructor(@InjectModel(Adapter.name) private AdapterModel: Model<Adapter>) {}

	createAdapter(createAdapterDto: CreateAdapterDto) {
		const newAdapter = new this.AdapterModel(createAdapterDto);
		return newAdapter.save();
	}

	updateAdapterByName(name: string, updateAdapterDto: UpdateAdapterDto) {
		return this.AdapterModel.findByIdAndUpdate({ name }, updateAdapterDto, { new: true });
	}

	getAdapterByName(name: string) {
		return this.AdapterModel.findOne({ name });
	}
}