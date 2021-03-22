import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MontoComponent } from './components/monto/monto.component';
import { BaseBancariaComponent } from './components/base-bancaria/base-bancaria.component';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { HomeComponent } from './page/home/home.component';
import { UsuarioNuevoComponent } from './page/usuario-nuevo/usuario-nuevo.component';
import { HttpClientModule  } from '@angular/common/http';
import { MostrarUsuariosComponent } from './components/mostrar-usuarios/mostrar-usuarios.component';
import { SolicitudNuevaComponent } from './page/solicitud-nueva/solicitud-nueva.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { ListarSolicitudesComponent } from './page/listar-solicitudes/listar-solicitudes.component';

@NgModule({
  declarations: [
    AppComponent,
    MontoComponent,
    BaseBancariaComponent,
    UsuariosComponent,
    HomeComponent,
    UsuarioNuevoComponent,
    MostrarUsuariosComponent,
    SolicitudNuevaComponent,
    SolicitudesComponent,
    ListarSolicitudesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
