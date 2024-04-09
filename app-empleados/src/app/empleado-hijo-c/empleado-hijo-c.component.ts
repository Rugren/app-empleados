import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrl: './empleado-hijo-c.component.css'
})
export class EmpleadoHijoCComponent implements OnInit {

  // El @Input es para ir de padre a hijo
  @Input () empleadoDeLista:Empleado;

  @Input () indice:number;


  constructor() { }

  ngOnInit(): void {

  }

}
