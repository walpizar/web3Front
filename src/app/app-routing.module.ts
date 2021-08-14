import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule) },
{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, 
{ path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule) },
{ path: 'clientes', loadChildren: () => import('./pages/clientes/clientes/clientes.module').then(m => m.ClientesModule) },
{ path: 'usuarios', loadChildren: () => import('./pages/usuarios/usuarios/usuarios.module').then(m => m.UsuariosModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
