import { ListaItem } from "./lista-item";

export class Lista{
    public nombre:string;
    public terminada:boolean;
    public item:ListaItem[];
    constructor( nombre:string){
        this.nombre=nombre;
        this.terminada=false;

    }
}