import { SaveTractorService } from ".";
import { Tractor } from "../../domain/models";
import { TractorsRepository } from "../../domain/repositories";

class TractorsRepositorySpy implements TractorsRepository {
  async save(tractor: Tractor): Promise<Tractor> {
    return tractor;
  }
}

type SutTypes = {
  sut: SaveTractorService;
  tractorsRepositorySpy: TractorsRepositorySpy;
};

const makeSut = (): SutTypes => {
  const repositorySpy = new TractorsRepositorySpy();
  const sut = new SaveTractorService(repositorySpy);
  return {
    sut,
    tractorsRepositorySpy: repositorySpy,
  };
};

describe("SaveTractorService", () => {
  test("Should throw if no name is provided", async () => {
    const { sut } = makeSut();
    const tractor = {
      name: "",
      image_base64: "any image",
    };
    await expect(sut.save(tractor)).rejects.toThrow();
  });

  test("Should resolve if no image is provided and a name is provided", async () => {
    const { sut } = makeSut();
    const tractor = {
      name: "any name",
      image_base64: "",
    };
    await expect(sut.save(tractor)).resolves.toBeTruthy();
  });
});
