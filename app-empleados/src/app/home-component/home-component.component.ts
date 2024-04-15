import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  titulo = 'Listado de empleados';

  constructor(private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) {
    // Este constructor los añadiría a la BD: empleados.service.ts
    // this.empleados = this.empleadosService.empleados; // (pasado abajo al ngOnInit)
  }

  ngOnInit(): void {
    /* this.empleados = this.empleadosService.empleados;
    Ahora se hace la llamada al servicio para que nos devuelva los empleados de la BD */
    this.empleadosService.obtenerEmpleadosBD().subscribe(misEmpleados=>{
      
      console.log(misEmpleados);

      this.empleados = Object.values(misEmpleados);
      this.empleadosService.setEmpleados(this.empleados);
    });
  }


  /* Pasado a empleado-hijo-c.component.ts también */
  empleados: Empleado[] = [
    // con el constructor de arriba (pasado al ngOnInit) ya no haría falta meterlos manualmente.
    /* new Empleado("Juan", "Díaz", "Presidente", 7500),
    new Empleado("Ana", "García", "Directora", 5500),
    new Empleado("María", "Fdez", "Jefa sección", 3500),
    new Empleado("Laura", "López", "Administrativa", 2500),
    new Empleado("María José (Pepa)", "Castro", "Contable", 3000), */
  ];

  agregarEmpleado() {
    // Esto se tiene que guardar en el Array empleados de arriba.
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    // miServicio.muestraMensaje es un método que se ha creado en el servicio que Muestra una Alerta
    //(mejorado en empleados.service.ts con + salario) this.miServicio.muestraMensaje("Nombre y apellidos del empleado: " + miEmpleado.nombre + " " + miEmpleado.apellido);
    // Se crean los empleados, pero si refrescamos vemos que no los guarda, porque no tenemos una BD.
    // this.empleados.push(miEmpleado); // comentada porque se la vamos a dejar al servicio: empleados.service.ts

    // Ahora se guarda en la BD
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);

    console.log(miEmpleado);
  }


  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0; // Pondrá 0 por defecto si no le ponemos una cifra.


}
