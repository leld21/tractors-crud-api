import { Schema, Model, model } from "mongoose";

export type Tractor = {
  name: string;
  image_base64: { type: Buffer; contentType: String; required: false };
};

export const TractorSchema: Schema = new Schema<Tractor>({
  name: String,
  image_base64: { type: Buffer, contentType: String, required: false },
});

export const TractorModel: Model<Tractor> = model("Tractor", TractorSchema);
