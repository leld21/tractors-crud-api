import { Schema, Model, model } from "mongoose";

export type Tractor = {
  name: string;
  image_base64: string;
};

export const TractorSchema: Schema = new Schema<Tractor>({
  name: { type: String, required: true },
  image_base64: { type: String, required: false },
});

export const TractorModel: Model<Tractor> = model("Tractor", TractorSchema);
