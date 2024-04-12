import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  // styleUrl: './actualiza-component.component.css'
  styleUrls: ['./actualiza-component.component.css']

})

export class ActualizaComponentComponent implements OnInit {

  // Traido todo del proyectos-component.component.ts 
  constructor(private router:Router, private route:ActivatedRoute, private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) {
  }

  empleados: Empleado[] = [];
  
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
    // Para que se muestre el empleado que se va a actualizar:
    this.indice = this.route.snapshot.params['id'];
    let empleado:Empleado = this.empleadosService.encontrarEmpleado(this.indice);
  
    // Que ponga los campos rellenados dentro de los campos.
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  
  }

  // Función del botón para volver al home/inicio de la web.
  volverHome(){
    this.router.navigate(['']); // La cadena vacía '' es la home

  }

  actualizaEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    
    // Sobreescribe en el índice lo que modifiquemos del empleado
    this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);

    // Esto no puesto en home-component.component.ts (para hacer que redirija a la home cuando cree el empleado):
    this.router.navigate(['']);
  }

  // CREADO DENTRO DE actualiza-component.component.html, no creado otro componente eliminarComponent.
  eliminaEmpleado() {
    this.empleadosService.eliminarEmpleado(this.indice);
    this.router.navigate(['']);
  }


  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  indice:number;

}
