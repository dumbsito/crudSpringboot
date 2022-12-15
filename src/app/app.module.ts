import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './models/empleado/empleado.component';
import { ListaComponent } from './components/lista/lista.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { RegistrarComponent } from './components/registrar/registrar.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { DetallesComponent } from './components/detalles/detalles.component'
@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    ListaComponent,
    RegistrarComponent,
    ActualizarComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
