import { Component, OnInit } from '@angular/core';
import { AlertController,NavController } from 'ionic-angular';
import {Lista,ListaItem} from '../../app/clases/index'
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {
    public nombreLista:string="";
    public nombreItem:string=''
    public items:ListaItem[]=[]
    constructor(private listaDesosService:ListaDeseosService,
    public alertCtrl: AlertController,public nvcCtr:NavController) { }
    agregar(){
        if(this.nombreItem.length==0){
            return;
        }
        let item = new ListaItem()
        item.nombre=this.nombreItem
        this.items.push(item)
        this.nombreItem='';
    }
    eliminarElemento(idx:number):void{
        this.items.splice(idx,1)
        console.log(this.items);
    }
    showCard():boolean{
       return this.items.length>0      
    }
    guardarLista(){
        if(!this.showCard()){
            this.showAlert()
            return;
        }
        let lista = new Lista(this.nombreLista)
        lista.item=this.items
        
        this.listaDesosService.agregarLista(lista)
        this.nvcCtr.pop();
    }
    showAlert() {
        const alert = this.alertCtrl.create({
          title: 'Nombre de la lista',
          subTitle: 'El nombre de la lista es necesario!',
          buttons: ['OK']
        });
        alert.present();
      }
    ngOnInit(): void { }
}
