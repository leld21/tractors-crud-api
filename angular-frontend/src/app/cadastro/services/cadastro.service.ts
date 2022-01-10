import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  readonly API_URL = 'http://localhost:3000/api/cadastro';
  constructor(private http: HttpClient) { }

  cadastrar(cadastro: FormData): any {
    return this.http.post(this.API_URL, cadastro);
  }
}