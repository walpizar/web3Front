import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { User, UserResponse } from '../models/user.inteface';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//inyeccion de dependecias
 private user= new BehaviorSubject<UserResponse>(null!);

 get user$(): Observable<UserResponse>{
   return this.user.asObservable();
 }



  constructor(private http: HttpClient,
    private router: Router) {

  }

login(user:User): Observable<UserResponse | void>{
    console.log(user);

 return this.http.post<UserResponse>(`${environment.URL}auth/login`,user)
 .pipe(
   map((user:UserResponse)=>{
     
    this.saveLocalStorage(user);
    this.user.next(user);

    return user;
   }),
   catchError((error)=> this.handleError(error))
 );
  
}

logout(){

  localStorage.removeItem('token');
  localStorage.removeItem('role');
  this.router.navigate(['login']);
  this.user.next(null!);

}

saveLocalStorage(user:UserResponse){
 
  const {mensaje, role, ...rest}=user;
  localStorage.setItem('user', JSON.stringify(rest));
  localStorage.setItem('role', role);

  
}

handleError(error: any): Observable<never>{

  let mensaje= 'Error desconocido, contacte con el admintrador';
  if(error){

    mensaje= `Error: ${error.error.mensaje}`

  }

  throw mensaje;
}








}
