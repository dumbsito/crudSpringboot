import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoComponent } from 'src/app/models/empleado/empleado.component';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
id:number;
empleado:EmpleadoComponent;

constructor(private route:ActivatedRoute,private servi:EmpleadoService){
this.id=this.route.snapshot.params["id"]
this.empleado=new EmpleadoComponent();
this.servi.getPorId(this.id).subscribe(data=>{
  this.empleado=data;
})
}
}
