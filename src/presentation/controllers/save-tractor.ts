import { HttpResponse, ok, serverError } from "./../protocols";
import { Controller } from "../protocols/controller";
import { Tractor } from "./../../domain/models";
import { SaveTractor } from "../../domain/usecases";

export class SaveTractorController implements Controller {
  constructor(
    private readonly tractor: Tractor,
    private readonly saveTractorService: SaveTractor
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
