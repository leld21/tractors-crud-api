import { Schema, Model, model } from "mongoose";

export type Tractor = {
  name: string;
  image_base64: string;
};

export const TractorSchema: Schema = new Schema<Tractor>({
  name: String,
  image_base64: String,
});

export const TractorModel: Model<Tractor> = model("Tractor", TractorSchema);
