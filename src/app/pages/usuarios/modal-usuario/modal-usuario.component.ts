import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import { ToastrService } from 'ngx-toastr';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';
import { UsuariosForms } from 'src/app/shared/Utils/usuariosForms';
enum Action{
  EDIT='edit',
  NEW='new'
}
@Component({
  selector: 'app-modal-usuario',
  templateUrl: './modal-usuario.component.html',
  styleUrls: ['./modal-usuario.component.css']
})
export class ModalUsuarioComponent implements OnInit {

  actionTODO= Action.NEW;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public usuariosForms: UsuariosForms,
    private usuariosSrv: UsuariosService,
    private toastr: ToastrService

  ) { }

  ngOnInit(): void {
    if(this.data?.user.hasOwnProperty('id')){
      this.data.titulo="Modificar Usuario";
      this.pathFormData();
      this.actionTODO= Action.EDIT;
    }
  }

  private pathFormData():void{

    this.usuariosForms.baseForm.patchValue({

      username:this.data?.user?.username,
      nombre:this.data?.user?.nombre,
      apellido1:this.data?.user?.apellido1,
      apellido2:this.data?.user?.apellido2,
      password:this.data?.user?.password,
      role:this.data?.user?.role,
      genero:this.data?.user?.genero=="M"? 'M':'F',
      estado:this.data?.user?.estado==true? 'true':'false',


    });

  }

  
  guardar(){

    if(this.usuariosForms.baseForm.invalid){
      alert("Formularios invalido.");
    }

    const form= this.usuariosForms.baseForm.value;

    if(this.actionTODO==Action.NEW){
      this.usuariosSrv.guardar(form).subscribe((res)=>{
        this.toastr.success("Usuario guardado");
       
  
      },(err)=>{
        this.toastr.error("Error al guardar el usuario");
      });
      
    }else{
      this.usuariosSrv.modificar(form, this.data?.user?.id).subscribe((res)=>{
        this.toastr.success("Usuario modificado");
       
  
      },(err)=>{
        this.toastr.error("Error al modificar el usuario");
      });

    }
   

    











  }
}
