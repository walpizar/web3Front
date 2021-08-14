import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClientesService } from 'src/app/shared/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'apellido1', 'apellido2','username','acciones'];
  dataSource=new MatTableDataSource();

//@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private srvCliente: ClientesService
  ) { }

  /*ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }*/


  ngOnInit(): void {
  
    this.cargar();
  }


  cargar(){

    this.srvCliente.consultarTodos().subscribe((lista)=>{
      this.dataSource.data=lista;

    },(err)=>{
      alert(err);
    });

  }


}
