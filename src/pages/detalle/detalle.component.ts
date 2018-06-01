import { Component, OnInit } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Lista,ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { AlertController } from 'ionic-angular';


@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html',
   
})
export class DetalleComponent implements OnInit {
    public idx:number
    public lista:any
    constructor(public nvCtrl:NavController,public navParms: NavParams,public _listadeseros:ListaDeseosService,
    public alertCtrl: AlertController) {

        this.idx=this.navParms.get("idx")
        this.lista=this.navParms.get("lista")
    }

    ngOnInit(): void { }
    actualizar(item:ListaItem){
        item.completado=!item.completado
        this._listadeseros.actualizarData()
        let todosMarcados:boolean=true;
        for(let item of this.lista.item){
          if(!item.completado){
            todosMarcados=false;
            break
          }
        }
        this.lista.terminada=todosMarcados
        this._listadeseros.actualizarData()

    }
    showConfirm() {
        const confirm = this.alertCtrl.create({
          title: this.lista.nombre,
          message: 'Deseas Elimiar Esta lista?',
          buttons: [
            {
              text: 'Cancerlar',
              handler: () => {
                console.log('Disagree clicked');
              }
            },
            {
              text: 'Aceptar',
              handler: () => {
                this._listadeseros.eliminarLista(this.idx)

                this.nvCtrl.pop()
              }
            }
          ]
        });
        confirm.present();
      }
}
