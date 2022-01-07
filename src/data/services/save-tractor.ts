import { TractorsRepository } from "./../../domain/repositories";
import { SaveTractor } from "../../domain/usecases";
import { TractorDTO } from "../protocols";
import { checkBase64 } from "../../helpers";

export class SaveTractorService implements SaveTractor {
  constructor(private readonly tractorsRepository: TractorsRepository) {}
  async save(tractor: TractorDTO): Promise<TractorDTO> {
    if (!tractor.name || tractor.name === "")
      throw new Error("Tractor name is required");
    if (tractor.image_base64 && !checkBase64(tractor.image_base64))
      throw new Error("Image is not base 64");
    return await this.tractorsRepository.save(tractor);
  }
}
