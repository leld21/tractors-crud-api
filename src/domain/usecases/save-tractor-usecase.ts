import { Tractor } from "./../models/tractors";
export interface SaveTractor {
  save: (tractor: Tractor) => Promise<Tractor>;
}
