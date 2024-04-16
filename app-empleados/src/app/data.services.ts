import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { LoginService } from "./login/login.service";


@Injectable()
export class DataServices {

    constructor(private httpClient:HttpClient, private loginService:LoginService){}

    cargarEmpleadosBD(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://app-empleados-44a41-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=' + token);

    }

    guardarEmpleadosBD(empleados:Empleado[]){
        /* La url de la base de datos de firebase es: https://app-empleados-44a41-default-rtdb.europe-west1.firebasedatabase.app/
        pero hay que añadirle al final datos.json*/
        this.httpClient.put('https://app-empleados-44a41-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleados).subscribe(

        response => console.log("Se han guardado los empleados: " + response),
        error => console.log("Error: " + error),
        );
    }

    actualizarEmpleadoBD(indice:number, empleado:Empleado){
        let url = 'https://app-empleados-44a41-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';

        this.httpClient.put(url, empleado).subscribe(

        response => console.log("Se ha modificado correctamente el empleado: " + response),
        error => console.log("Error: " + error),
        );
    }

    eliminarEmpleadoBD(indice:number){
        let url = 'https://app-empleados-44a41-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';

        this.httpClient.delete(url).subscribe(

        response => console.log("Se ha eliminado correctamente el empleado: " + response),
        error => console.log("Error: " + error),
        );
    }


}