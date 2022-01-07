import { Tractor } from "../../../domain/models";
import { TractorModel } from "../../../domain/models";
import { TractorsRepository } from "./../../../domain/repositories";
export class TractorsRepositoryMongo implements TractorsRepository {
  async save(tractorDTO: Tractor): Promise<Tractor> {
    const tractor = new TractorModel({
      name: tractorDTO.name,
      image_base64: tractorDTO.image_base64,
    });
    return await tractor.save();
  }
}
