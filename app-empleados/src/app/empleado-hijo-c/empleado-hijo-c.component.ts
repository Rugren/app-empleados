import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrl: './empleado-hijo-c.component.css'
})
export class EmpleadoHijoCComponent implements OnInit {

  // El @Input es para ir de padre a hijo
  @Input() empleadoDeLista: Empleado;

  @Input() indice: number;


  constructor() { }

  ngOnInit(): void {
  }

  empleados: Empleado[] = [
    new Empleado("Juan", "Díaz", "Presidente", 7500),
    new Empleado("Ana", "García", "Directora", 5500),
    new Empleado("María", "Fdez", "Jefa sección", 3500),
    new Empleado("Laura", "López", "Administrativa", 2500),
    new Empleado("María José (Pepa)", "Castro", "Contable", 3000),
  ];

  empleadoAgregado(empleado: Empleado) {
    this.empleados.push(empleado);
  }

  /* Ver en https://angular.io/guide/inputs-outputs :
  export class AppComponent {
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
  Cambiados nombres abajo para tenerlos más identificativos.
  */

  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }


  }
