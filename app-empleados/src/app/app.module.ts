import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    ProyectosComponentComponent,
    HomeComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    ServicioEmpleadosService,
    EmpleadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
