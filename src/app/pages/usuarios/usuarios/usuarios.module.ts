import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { MaterialModule } from 'src/app/material.module';
import { ModalUsuarioComponent } from '../modal-usuario/modal-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsuariosComponent,
    ModalUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UsuariosModule { }
