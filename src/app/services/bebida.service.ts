import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { IBebida } from '../models/bebida.model';

@Injectable({
  providedIn: 'root'
})

export class BebidaService {
  bebidas: IBebida [] = [     { 
    id: 1,
    titulo: 'BEBIDA 1',
    enderecoImagem: 'assets/bebida.jpeg',
    descricao: 'dlskdlskdslks',
    valor: 10.00
  },
  {
    id: 2,
    titulo: 'BEBIDA 2',
    enderecoImagem: 'assets/bebida.jpeg',
    descricao: 'dlskdlss',
    valor: 14.00
  }, ];

  constructor(private http: HttpClient) {}


  getBebidas () {
    return this.bebidas;
  }

  devolverBebidas(): Observable<IBebida[]> {
    return this.http.get<IBebida[]>('http://localhost:3000/bebidas')
  }


  adicionarBebidas (bebida:IBebida): Observable<IBebida> {

    return this.http.post<IBebida>('http://localhost:3000/bebidas', bebida);

  }
}
