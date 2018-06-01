import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';

@Injectable()
export class ListaDeseosService {
    public listas:Lista[]=[];
    constructor(){
        this.cargarData()
       /*  let lista1= new Lista('Compra de superMercado')
        let lista2= new Lista('Lista de Deseos')
        let lista3= new Lista('Cosas de la Universidad')
        this.listas.push(lista1)
        this.listas.push(lista2)
        this.listas.push(lista3)
        console.log("Lista deseos inicado"); */
       
    }
    
    actualizarData(){
        localStorage.setItem("data",JSON.stringify( this.listas))
        
    }
    cargarData(){
        if(localStorage.getItem("data"))
        {
        this.listas=JSON.parse (localStorage.getItem("data"))}
    }
    agregarLista(mylista:Lista){
        console.log(mylista);
            this.listas.push(mylista)
            this.actualizarData()
    }
    eliminarLista(idx:number){
        this.listas.splice(idx,1)
        this.actualizarData()
    }
}