import { Injectable } from '@angular/core';

// Servicio de la ventana emergente

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }

  muestraMensaje(mensaje:string){
    alert(mensaje);
  }



}
