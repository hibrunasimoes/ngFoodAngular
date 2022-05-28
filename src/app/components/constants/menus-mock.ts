import { IMenu } from "src/app/models/menu.model";

export const LISTA_MENU_MOCK: IMenu [] = [
     {  id: 1,
        titulo: 'BEBIDAS',
        enderecoImagem: 'assets/bebida.jpeg',
        path: '/bebidas'
      }, 
      {
        id: 2,
        titulo: 'COMIDAS',
        enderecoImagem: 'assets/comida.jpeg',
        path: '/comidas'
      }
];
