import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmpleadoComponent } from 'src/app/models/empleado/empleado.component';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent {
  id:number;
  empleado:EmpleadoComponent;

  constructor(private route:ActivatedRoute,private servi:EmpleadoService,private router:Router){
  this.id=this.route.snapshot.params["id"]
  this.empleado=new EmpleadoComponent();
  this.servi.getPorId(this.id).subscribe(data=>{
    this.empleado=data; 
  })
 
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/empleados']);

  }
  onSubmit(){

 
this.servi.actualizar(this.id,this.empleado).subscribe(data=>{
  this.irAlaListaDeEmpleados()
},error => console.log(error));

}
  }

