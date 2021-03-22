import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { UsuarioNuevoComponent } from './page/usuario-nuevo/usuario-nuevo.component';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { SolicitudNuevaComponent } from './page/solicitud-nueva/solicitud-nueva.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuario-nuevo', component: UsuarioNuevoComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'solicitud-nueva', component: SolicitudNuevaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
