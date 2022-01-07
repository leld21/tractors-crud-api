import { SaveTractorService } from ".";
import { Tractor } from "../../domain/models";
import { TractorsRepository } from "../../domain/repositories";

class TractorsRepositorySpy implements TractorsRepository {
  async save(tractor: Tractor): Promise<Tractor> {
    return tractor;
  }
}

describe("SaveTractorService", () => {
  test("Should throw if no name is provided", async () => {
    const repositorySpy = new TractorsRepositorySpy();
    const sut = new SaveTractorService(repositorySpy);
    const tractor = {
      name: "",
      image_base64: "any image",
    };
    await expect(sut.save(tractor)).rejects.toThrow();
  });
});
