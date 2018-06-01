import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';
@Component({
    selector: 'app-terminados',
    templateUrl: './terminados.component.html'
})
export class TerminadosComponent implements OnInit {
    public myLista:any[]=[]
    
    constructor(public _listaDeseos:ListaDeseosService,public navCtrl:NavController) {

     }


    ngOnInit(): void { }
    irAgregar(){
        this.navCtrl.push(AgregarComponent)
    }
    verDetalle(lista,idx):void{
        this.navCtrl.push(DetalleComponent,{
            lista,
            idx
        })
    }
}
