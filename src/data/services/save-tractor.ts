import { TractorsRepository } from "./../../domain/repositories";
import { SaveTractor } from "../../domain/usecases";
import { TractorDTO } from "../protocols";

export class SaveTractorService implements SaveTractor {
  constructor(private readonly tractorsRepository: TractorsRepository) {}
  async save(tractor: TractorDTO): Promise<TractorDTO> {
    return await this.tractorsRepository.save(tractor);
  }
}
