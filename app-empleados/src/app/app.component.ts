import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'app-empleados';
  titulo = 'Listado de empleados';

  empleados: Empleado[] = [
    // Estos son los que aparecerán por defecto, metidos manualmente (ver si se pueden borrar desde la BD y no aparecen después cuando vuelva a cargar)
    new Empleado("Juan", "Díaz", "Presidente", 7500),
    new Empleado("Ana", "García", "Directora", 5500),
    new Empleado("María", "Fdez", "Jefa sección", 3500),
    new Empleado("Laura", "López", "Administrativa", 2500),
    new Empleado("María José (Pepa)", "Castro", "Contable", 3000),

  ];

  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    // Esto se tiene que guardar en el Array empleados de arriba.
    this.empleados.push(miEmpleado);
    // Se crean los empleados, pero si refrescamos vemos que no los guarda, porque no tenemos una BD.
  }

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0; // Pondrá 0 por defecto si no le ponemos una cifra.


}
