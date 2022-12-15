import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoComponent } from 'src/app/models/empleado/empleado.component';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  empleados:EmpleadoComponent[]=[]

  constructor(private servi:EmpleadoService,private router:Router){
  
  }
  ngOnInit(): void {
    this.getEmpleados()
  }

  getEmpleados(){
    this.servi.getListaEmpleados().subscribe(data=>{
      console.log(data);
      this.empleados=data

      
      
    })
  }

  actualizar(id:number){
  this.router.navigate(["actualizar",id])
  }

  borrar(id:number){
    this.servi.eliminar(id).subscribe(data=>{
      console.log(data);
   this.getEmpleados()
    })
    }

    verDetalles(id:number){
   this.router.navigate(["detalles",id])
    }
  }
