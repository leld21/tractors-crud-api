import { HttpResponse, ok, serverError } from "./../protocols";
import { SaveTractorService } from "./../../data/services/save-tractor";
import { Controller } from "../protocols/controller";
import { Tractor } from "./../../domain/models";

export class SaveTractorController implements Controller {
  constructor(
    private readonly tractor: Tractor,
    private readonly saveTractorService: SaveTractorService
  ) {}
  async handle(): Promise<HttpResponse<Tractor>> {
    try {
      const res = await this.saveTractorService.save(this.tractor);
      return ok(res);
    } catch (err: any) {
      return serverError(err);
    }
  }
}
