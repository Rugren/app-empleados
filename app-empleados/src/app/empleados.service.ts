/* Es aquí en este archivo dónde se supone que iría implementado el código de consulta a BD, lectura de repords, etc.
En nuestro caso es aquí dónde tendríamos declarado nuestro Array
*/

import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()

export class EmpleadosService {

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService){

    }

    empleados: Empleado[] = [
        // Estos son los que aparecerán por defecto, metidos manualmente (ver si se pueden borrar desde la BD y no aparecen después cuando vuelva a cargar)
        new Empleado("Juan", "Díaz", "Presidente", 7500),
        new Empleado("Ana", "García", "Directora", 5500),
        new Empleado("María", "Fdez", "Jefa sección", 3500),
        new Empleado("Laura", "López", "Administrativa", 2500),
        new Empleado("María José (Pepa)", "Castro", "Contable", 3000),
    ];

    agregarEmpleadoServicio(empleado: Empleado) {
        // (Comentado para quitar EL ALERT cuando se crea) this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" + "Nombre completo: " + empleado.nombre + " " + empleado.apellido + "\n" + "Salario: " + empleado.salario);
        this.empleados.push(empleado);
    }

    encontrarEmpleado(indice:number){
        let empleado:Empleado = this.empleados[indice];
        // para que me devuelva el empleado cuando lo busque o lo edite:
        return empleado;
    }

    actualizarEmpleado(indice:number, empleado:Empleado) {
        let empleadoModificado=this.empleados[indice];
        empleadoModificado.nombre = empleado.nombre;
        empleadoModificado.apellido = empleado.apellido;
        empleadoModificado.cargo = empleado.cargo;
        empleadoModificado.salario = empleado.salario;

    }


}
