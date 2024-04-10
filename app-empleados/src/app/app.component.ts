import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  // title = 'app-empleados';
  titulo = 'Listado de empleados';

  constructor(){}

  ngOnInit(): void {
  }


}
