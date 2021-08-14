import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Injectable({providedIn:'root'})
export class UsuariosForms{


    constructor(private fb: FormBuilder){}

    baseForm= this.fb.group({        
        username:['', [Validators.required, Validators.email]] ,  
        nombre : ['', [Validators.required]] ,
        apellido1 : ['', [Validators.required]] , 
        apellido2 : ['', [Validators.required]] ,
        genero: ['', [Validators.required]]   ,
        password: ['', [Validators.required]],     
        role: ['', [Validators.required]] , 
        estado:['', [Validators.required]] 

    })
}