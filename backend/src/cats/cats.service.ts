import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Cat } from "src/schemas/Cat.schema";
import { CreateCatDto } from "./dto/CreateCat.dto";
import { UpdateCatDto } from "./dto/UpdateCat.dto";

@Injectable()
export class CatsService {

	constructor(@InjectModel(Cat.name) private CatModel: Model<Cat>) {}

	createCat(createCatDto: CreateCatDto) {
		const newCat = new this.CatModel(createCatDto);
		return newCat.save();
	}

	updateCatByName(name: string, updateCatDto: UpdateCatDto) {
		return this.CatModel.findOneAndUpdate({ name }, updateCatDto, { new: true });
	}

	getCatByName(name: string) {
		return this.CatModel.findOne({ name });
	}
}