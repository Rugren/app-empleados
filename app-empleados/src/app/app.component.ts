import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';
// import { AngularFireModule } from '@angular/fire/compat'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  // title = 'app-empleados';
  titulo = 'Listado de empleados';

  constructor(private loginService: LoginService) {

  }

  ngOnInit(): void {

    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyC3SseHokcVeHyBx7GksfVRE_mp3Qy1BNw",
      authDomain: "app-empleados-44a41.firebaseapp.com",

    })
  }

  estaLogeado() {
    return this.loginService.estaLogeado();
  }

  logout() {
    this.loginService.logout();
  }


}
