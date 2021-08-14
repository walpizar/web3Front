import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Injectable({providedIn:'root'})
export class LoginFormBase {
    private emailFormat= /\S+@\S+\.\S+/;

    errorMessage=null;


    constructor(private fb:FormBuilder) {
    }

    baseForm= this.fb.group({

        username:['',[Validators.required, Validators.pattern(this.emailFormat)]],
        password:['',[ Validators.required, Validators.minLength(6)]]

    });

 /*   private getError(field: string):void{

        const{errors}= this.baseForm.get(field);
        if(errors){
            const minLenght= errors?.minLength?.requiredLength;
            const messages={
                required:'Debe indicar un valor',
                pattern:'Correo Electrónico Invalido',
                minLenght:`El campo require almenos ${minLenght}`
            };

            const errorKey= Object.keys(errors).find(Boolean);
            this.errorMessage= messages[errorKey];
            
        }

    }
    
*/

}