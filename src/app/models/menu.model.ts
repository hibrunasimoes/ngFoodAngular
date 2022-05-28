import { IBase } from "./base.model";

export interface IMenu extends IBase{
    titulo: string;
    enderecoImagem: string;
    path: string;
  }