/* 
Así es cómo se importó todo cuando fuimos creándolo:

import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";


 export class LoginGuardian implements CanActivate {
     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
         throw new Error("Method not implemented.");
     }

}*/

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginGuardian implements CanActivate {

    constructor(private loginService: LoginService, private router:Router) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if(this.loginService.estaLogeado()){
            return true;
        }else{
            this.router.navigate(['login']);
            return false;
        }
    


    }

}