import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ListaComponent } from './components/lista/lista.component';
import { RegistrarComponent } from './components/registrar/registrar.component';

const routes: Routes = [
  {path:"empleados",component:ListaComponent},
  {path:"",redirectTo:"empleados",pathMatch:"full"},
  {path:"registrar",component:RegistrarComponent},
  {path:"actualizar/:id",component:ActualizarComponent},
  {path:"detalles/:id",component:DetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
