import { SaveTractorService } from "./../../data/services/save-tractor";
import { Controller } from "../protocols/controller";
import { Tractor } from "./../../domain/models";

export class SaveTractorController implements Controller<Tractor> {
  constructor(
    private readonly tractor: Tractor,
    private readonly saveTractorService: SaveTractorService
  ) {}
  async handle(): Promise<Tractor> {
    return await this.saveTractorService.save(this.tractor);
  }
}
