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
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

const appRoutes:Routes=[
{path:'', component:HomeComponentComponent},
{path:'proyectos', component:ProyectosComponentComponent},
{path:'quienes', component:QuienesComponentComponent},
{path:'contacto', component:ContactoComponentComponent},
//  {path:'actualiza', component:ActualizaComponentComponent}, // así si se muestra el http://localhost:4200/actualiza con actualiza-component works!
{path:'actualiza/:id', component:ActualizaComponentComponent},
{path:'login', component:LoginComponent},

/* Los '**' (2 asteriscos) son para cuando sea una ruta distinta a todas las anteriores (proyectos, contacto,...) redirige aquí.
¡IMPORTANTE! El path del error personalizado poner la última, porque es la última ruta que se va a ejecutar. */
{path:'**', component:ErrorPersonalizadoComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    ProyectosComponentComponent,
    HomeComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent,
    ErrorPersonalizadoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,

  ],
  providers: [
    provideClientHydration(),
    ServicioEmpleadosService,
    EmpleadosService,
    DataServices,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
