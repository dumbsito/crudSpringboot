import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleadoComponent } from '../models/empleado/empleado.component';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http:HttpClient) { 

  }

  baseUrl="http://localhost:8081/api/v1/empleados"

  getListaEmpleados():Observable<EmpleadoComponent[]>{
  return this.http.get<EmpleadoComponent[]>(`${this.baseUrl} `)
  }

  registrar(e1:EmpleadoComponent):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,e1)
  }

  actualizar(id:number,e1:EmpleadoComponent):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,e1)
  }

  getPorId(id:number):Observable<EmpleadoComponent>{
    return this.http.get<EmpleadoComponent>(`${this.baseUrl}/${id}`)
  }

  eliminar(id:number):Observable<Object>{
    return this.http.delete(this.baseUrl + "/" + id)
  }

}
