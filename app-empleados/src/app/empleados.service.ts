/* Es aquí en este archivo dónde se supone que iría implementado el código de consulta a BD, lectura de repords, etc.
En nuestro caso es aquí dónde tendríamos declarado nuestro Array
*/

import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()

export class EmpleadosService {

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService:DataServices){

    }

    setEmpleados(misEmpleadosBD:Empleado[]){
        this.empleados = misEmpleadosBD;
    }

    obtenerEmpleadosBD(){
        return this.dataService.cargarEmpleadosBD();
    }

    empleados: Empleado[] = [];

    /* empleados: Empleado[] = [
        // Estos son los que aparecerán por defecto, metidos manualmente (ver si se pueden borrar desde la BD y no aparecen después cuando vuelva a cargar)
        new Empleado("Juan", "Díaz", "Presidente", 7500),
        new Empleado("Ana", "García", "Directora", 5500),
        new Empleado("María", "Fdez", "Jefa sección", 3500),
        new Empleado("Laura", "López", "Administrativa", 2500),
        new Empleado("María José (Pepa)", "Castro", "Contable", 3000),
    ]; */

    agregarEmpleadoServicio(empleado: Empleado) {
        // (Comentado para quitar EL ALERT cuando se crea) this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" + "Nombre completo: " + empleado.nombre + " " + empleado.apellido + "\n" + "Salario: " + empleado.salario);
        this.empleados.push(empleado);

        // Para guardar los datos en la BD de Firebase:
        this.dataService.guardarEmpleadosBD(this.empleados);
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

        this.dataService.actualizarEmpleadoBD(indice, empleado);
    }

    eliminarEmpleado(indice:number) {
        this.empleados.splice(indice, 1);

        // Para eliminar los datos en la BD y que se queden guardados los siguientes, que no nos borre uno y los siguientes dé error.
        this.dataService.eliminarEmpleadoBD(indice);

        // if(this.empleados!=null) // Se puede prescindir de esto, ya que si no hay empleados, no se ejecuta el siguiente código
        this.dataService.guardarEmpleadosBD(this.empleados);
    
    }


}
