import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }


  public noHerrera( control: FormControl ): { [ s: string ]: boolean } {

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

}
