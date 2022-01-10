import express, { Express } from "express";
import bodyParser from "body-parser";

const cors = require("cors");

import save_tractor from "../routes/save-tractor";

export const setupApp = (): Promise<Express> => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(save_tractor);
  return Promise.resolve(app);
};
