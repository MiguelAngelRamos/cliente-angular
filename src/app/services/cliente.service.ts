import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/clienteinterface';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  constructor( private httpClient: HttpClient, private router: Router) {}

  getClientes(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>('http://localhost:8080/api/clientes');
  }
}