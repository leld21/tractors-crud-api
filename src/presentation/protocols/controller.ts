import { HttpResponse } from "./http-response";

export interface Controller {
  handle: () => Promise<HttpResponse>;
}
