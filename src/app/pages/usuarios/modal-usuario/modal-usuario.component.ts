import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import { ToastrService } from 'ngx-toastr';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';
import { UsuariosForms } from 'src/app/shared/Utils/usuariosForms';
@Component({
  selector: 'app-modal-usuario',
  templateUrl: './modal-usuario.component.html',
  styleUrls: ['./modal-usuario.component.css']
})
export class ModalUsuarioComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public usuariosForms: UsuariosForms,
    private usuariosSrv: UsuariosService,
    private toastr: ToastrService

  ) { }

  ngOnInit(): void {
  }

  
  guardar(){


    if(this.usuariosForms.baseForm.invalid){
      alert("Formularios invalido.");
    }

    const form= this.usuariosForms.baseForm.value;
    this.usuariosSrv.guardar(form).subscribe((res)=>{
      this.toastr.success("Usuario guardado");
     

    },(err)=>{
      this.toastr.error("Erro al guardar el usuario");
    })










  }
}
