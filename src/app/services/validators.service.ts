import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

// Inerfaz para utilizar en el tipo de retorno de la Promesa y del Observable del metodo userExists()
interface ErrorValidate {

  [ s: string ]: boolean


}

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }


  public noHerrera( control: FormControl ): ErrorValidate {

    if( control.value.toLowerCase() === 'herrera' ) {

      return {

        noHerrera: true

      } 

    } 

    return null; 

   

  }

  public checkSamePasswords( passOneName: string, passTwoName: string ) {

    return ( formGroup: FormGroup) =>{

      const passOneControl = formGroup.controls[passOneName];
      const passTwoControl = formGroup.controls[passTwoName];

      if( passOneControl.value === passTwoControl.value ) {

        passTwoControl.setErrors(null);

      } else {

        passTwoControl.setErrors({

          passwordsNotMatch: true

        });

      }

    }

  }

  public userExists( control: FormControl ): Promise <ErrorValidate> | Observable <ErrorValidate>{

    if( !control.value ) {

      return Promise.resolve( null ); 

    }

    return new Promise( ( resolve, reject ) =>{

      setTimeout(() => {

        if( control.value === 'strider' ) {

          resolve({
            exists: true
          })

        } else {

          resolve( null ); 

        }

      }, 3500);


    });

    



  }

}
