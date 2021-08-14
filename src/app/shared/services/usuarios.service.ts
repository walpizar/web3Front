import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../models/Usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }
  
  guardar(usuario: Usuarios):Observable<Usuarios>{

    const userToken= JSON.parse(localStorage.getItem('user')!); 
    
    return this.http.post<Usuarios>(`${environment.URL}usuario`,usuario, 
    {headers:{'auth':userToken.token}})
    .pipe(catchError(this.handleError));

  }

  modificar():void{

  }

  eliminar():void{

  }

  consultarTodos():Observable<Usuarios[]>{
   
    const userToken= JSON.parse(localStorage.getItem('user')!); 


    return this.http.get<Usuarios[]>(`${environment.URL}usuario`, 
    {headers:{'auth':userToken.token}})
    .pipe(catchError(this.handleError));

  }

  consultarId():void{

  }

  handleError(error: any): Observable<never>{

    console.log(error);
    let mensaje= 'Error desconocido, contacte con el admintrador';
    if(error){
  
      mensaje= `Error: ${error.error.mensaje}`
  
    }
  
    throw mensaje;
  }
}
