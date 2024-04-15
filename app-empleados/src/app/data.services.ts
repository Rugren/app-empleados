import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";


@Injectable()
export class DataServices {

    constructor(private httpClient:HttpClient){}

    cargarEmpleadosBD(){
        return this.httpClient.get('https://app-empleados-44a41-default-rtdb.europe-west1.firebasedatabase.app/datos.json');

    }

    guardarEmpleadosBD(empleados:Empleado[]){
        /* La url de la base de datos de firebase es: https://app-empleados-44a41-default-rtdb.europe-west1.firebasedatabase.app/
        pero hay que añadirle al final datos.json*/
        this.httpClient.put('https://app-empleados-44a41-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleados).subscribe(

        response => console.log("Se han guardado los empleados: " + response),
        error => console.log("Error: " + error),

        );


    }


}