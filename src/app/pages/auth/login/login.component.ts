import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.inteface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginFormBase } from 'src/app/shared/Utils/loginForm';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(
    public loginForm: LoginFormBase ,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService

  ) { }

 onLogin(){

  
   if(this.loginForm.baseForm.invalid){
     return;
   }  
   
   this.authService.login(this.loginForm.baseForm.value).
    subscribe((res)=>{

   
      if(res){
        this.router.navigate(['usuarios']);
      }

   },(err)=>{

      this.toastr.error(err);

   }
   
   );
 }



  ngOnInit(): void {
    

  }




}
