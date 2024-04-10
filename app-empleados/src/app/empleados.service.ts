/* Es aquí en este archivo dónde se supone que iría implementado el código de consulta a BD, lectura de repords, etc.
En nuestro caso es aquí dónde tendríamos declarado nuestro Array
*/

import { Empleado } from "./empleado.model";

export class EmpleadosService {

    empleados: Empleado[] = [
        // Estos son los que aparecerán por defecto, metidos manualmente (ver si se pueden borrar desde la BD y no aparecen después cuando vuelva a cargar)
        new Empleado("Juan", "Díaz", "Presidente", 7500),
        new Empleado("Ana", "García", "Directora", 5500),
        new Empleado("María", "Fdez", "Jefa sección", 3500),
        new Empleado("Laura", "López", "Administrativa", 2500),
        new Empleado("María José (Pepa)", "Castro", "Contable", 3000),
    ];

    agregarEmpleadoServicio(empleado: Empleado) {
        this.empleados.push(empleado);
    }

}
