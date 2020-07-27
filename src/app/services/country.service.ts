import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor( private httpClient: HttpClient ) {

  }

  // El pipe es para agregar mas filtros al Observable; el map es para mutar la respuesta que obtenemos (para transformarla) y en el mismo map retornamos la nueva respuesta; el map de JavaScript es para transformar cada uno de los elementos de mi arreglo y retornar así un nuevo arreglo  
  public getCountries() {

    return this.httpClient.get('https://restcountries.eu/rest/v2/lang/es').pipe(

      map( (resp: any[])  =>{

        //return 'Hola Mundo';

        return resp.map( pais => {

          return {
            name: pais.name,
            code: pais.alpha3Code
          }

        })


      })

    )

  }

}
