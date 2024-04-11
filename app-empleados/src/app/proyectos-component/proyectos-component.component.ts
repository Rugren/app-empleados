import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrl: './proyectos-component.component.css'
})
export class ProyectosComponentComponent implements OnInit {

  constructor(private router:Router, miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) {
  }

  empleados: Empleado[] = [];
  
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  // Función del botón para volver al home/inicio de la web.
  volverHome(){
    this.router.navigate(['']); // La cadena vacía '' es la home

  }

  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);

    // Esto no puesto en home-component.component.ts (para hacer que redirija a la home cuando cree el empleado):
    this.router.navigate(['']);
  }


  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

}
