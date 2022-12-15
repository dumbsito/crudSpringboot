import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EmpleadoComponent } from 'src/app/models/empleado/empleado.component';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  empleado:EmpleadoComponent=new EmpleadoComponent()

  constructor(private servi:EmpleadoService, private route:Router){}

  onSubmit(){
    this.servi.registrar(this.empleado).subscribe(data=>{
      console.log(data);
      this.goToListEmpleados();
     },error=>console.log(error)
     )
  }

goToListEmpleados(){
  this.route.navigate(["/empleados"])
}

guardar(){
  
}
}
