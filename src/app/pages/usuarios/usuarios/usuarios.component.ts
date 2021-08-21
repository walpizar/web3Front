import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalUsuarioComponent } from '../modal-usuario/modal-usuario.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'apellido1', 'apellido2','username','acciones'];
  dataSource=new MatTableDataSource();

//@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private srvUsuarios: UsuariosService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  /*ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }*/


  ngOnInit(): void {
  
    this.cargar();
  }



  eliminar(id: number){

   if(window.confirm('Desea eliminar?')){
     this.srvUsuarios.eliminar(id).subscribe((res)=>{

      this.cargar();
     },(err)=>{

      this.toastr.error("Error al eliminar el usuario");

     } );

   }




  }

  abrirModal(user={}):void{

    console.log(user);
    let dialogRef= this.dialog.open(ModalUsuarioComponent,{
      height:'700px',
      width:'700px',
      data:{titulo:'Nuevo Usuario', user}

    });

    dialogRef.afterClosed().subscribe((result)=>{
      this.cargar();


    });

  }


  cargar(){

    this.srvUsuarios.consultarTodos().subscribe((lista)=>{
      this.dataSource.data=lista;
      console.log(lista);

    },(err)=>{
      this.toastr.error("Error al cargar la lista.");
    });

  }

}
