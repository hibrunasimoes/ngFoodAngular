import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LIST_BEBDIDAS_MOCKS } from 'src/app/components/constants/bebidas-mock';
import { IBebida } from 'src/app/models/bebida.model';
import { BebidaService } from 'src/app/services/bebida.service';

@Component({
  selector: 'ngf-bebida-lista',
  templateUrl: './bebida-lista.component.html',
  styleUrls: ['./bebida-lista.component.scss']
})
export class BebidaListaComponent implements OnInit {

  listaBebida: IBebida [] = [];

  constructor ( private bebidaService: BebidaService ) { 

  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.buscarBebidas();
  }

  buscarBebidas () {
    this.bebidaService.devolverBebidas().subscribe ((resposta: IBebida[]) => {
      this.listaBebida = resposta;
    });

  }

  adicionarBebidas() {
    const bebida = {
      id: this.listaBebida.length +1,
      titulo: 'BEBIDA $ {this.listabebida.length +1}',
      enderecoImagem: 'assets/bebida.jpeg',
      descricao: 'dsjdksjdks',
      valor: 16.00
    };

    this.bebidaService.adicionarBebidas(bebida).subscribe ((resultado: IBebida )=> {
      console.log ('resultado', resultado );
      this.listaBebida.push (resultado);
    });
  }

}