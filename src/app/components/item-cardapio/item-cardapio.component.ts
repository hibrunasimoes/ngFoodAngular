import { Component, OnInit } from '@angular/core';
import { IComida } from 'src/app/models/comida.model';

@Component({
  selector: 'ngf-item-cardapio',
  templateUrl: './item-cardapio.component.html',
  styleUrls: ['./item-cardapio.component.scss']
})
export class ItemCardapioComponent implements OnInit {

  comida:IComida ={
      id: 600,
      titulo: 'COMIDA 1',
      enderecoImagem: 'assets/comida.jpeg',
      descricao: 'dsjdksjdks',
      valor: 16.00
    };


  constructor() { }

  ngOnInit(): void {}


  }


