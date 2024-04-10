import { Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrl: './caracteristicas-empleado-c.component.css'
})
export class CaracteristicasEmpleadoCComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();
  /* Buscar @Output() newItemEvent = new EventEmitter<string>(); 
  en https://angular.io/guide/inputs-outputs para ver qué hace la instrucción. */

  constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  /* Ver en https://angular.io/guide/inputs-outputs 
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  } */

  agregaCaracteristicas(value: string) {
    // miServicio.muestraMensaje Muestra un Alert cuando añadamos una característica
    this.miServicio.muestraMensaje("Característica agregada: " + value);
    this.caracteristicasEmpleados.emit(value);
  }

}
