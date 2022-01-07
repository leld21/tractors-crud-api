import { Tractor } from "./../models/tractors";
export interface TractorsRepository {
  save: (tractor: Tractor) => Promise<Tractor>;
}
