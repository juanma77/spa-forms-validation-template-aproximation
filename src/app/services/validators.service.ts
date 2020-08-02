import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

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

}
