import { SaveTractorController } from "../../presentation/controllers";
import { SaveTractorService } from "../../data/services";
import { TractorsRepositoryMongo } from "../../infra/db/mongodb";

import { Router } from "express";

const save_tractor = Router();
save_tractor.post("/save", async (request, response) => {
  const tractor = request.body;
  const controller = new SaveTractorController(
    tractor,
    new SaveTractorService(new TractorsRepositoryMongo())
  );
  const tractorSaved = await controller.handle();
  response.json(tractorSaved);
});

export default save_tractor;
