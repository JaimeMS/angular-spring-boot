import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiURLBase + '/api/clientes';

  constructor( private http: HttpClient ) {}

  //obs. o retorno do Observable é o mesmo retorno da API ou any
  salvar( cliente: Cliente ): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiURL}`, cliente);
  }

  //no back-end o servico de atualizar retorna void, então o Observable<any> recebe any no parâmetro
  atualizar( cliente: Cliente ): Observable<any> {
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiURL);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar( cliente: Cliente ): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
  }
}
