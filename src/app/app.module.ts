import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TerminadosComponent } from '../pages/terminados/terminados.component';
import { PendientesComponent } from '../pages/pendientes/pendientes.component';
import { ListaDeseosService } from './services/lista-deseos.service';
import { AgregarComponent } from '../pages/agregar/agregar.component';
import { PlaceholderPipe } from './pipes/placeholder.pipe';
import { DetalleComponent } from '../pages/detalle/detalle.component';
import { PendientesPipe } from './pipes/pendientes.pipe';

@NgModule({
  declarations: [
    MyApp,  
    TabsPage,
    TerminadosComponent,
    PendientesComponent,
    AgregarComponent,
    PlaceholderPipe,
    DetalleComponent,
    PendientesPipe
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    TerminadosComponent,
    PendientesComponent,
    AgregarComponent,
    DetalleComponent
    
  ],
  providers: [
    StatusBar,
    ListaDeseosService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}