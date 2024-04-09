import { Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrl: './caracteristicas-empleado-c.component.css'
})
export class CaracteristicasEmpleadoCComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();
  /* Buscar @Output() newItemEvent = new EventEmitter<string>(); 
  en https://angular.io/guide/inputs-outputs para ver qué hace la instrucción. */


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  /* Ver en https://angular.io/guide/inputs-outputs 
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  } */

  agregaCaracteristicas(value: string) {
    this.caracteristicasEmpleados.emit(value);
  }

}
