import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

type Cadastro = {
  name: String;
  image_base64: String;
};

@Injectable({
  providedIn: "root",
})
export class CadastroService {
  readonly API_URL = "http://localhost:3000/save";
  constructor(private http: HttpClient) {}

  cadastrar(cadastro: Cadastro): any {
    return this.http.post(this.API_URL, cadastro);
  }
}
