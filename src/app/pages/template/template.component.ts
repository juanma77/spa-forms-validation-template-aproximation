import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  public user = {

    name: '',
    lastName: '',
    email: '',
    country: '',
    genre: 'M'

  };

  public countries: any[] = [];

  constructor( private countryService: CountryService ) { }

  // El unshift() es para agregar un nuevo elemento al inicio de un arreglo 
  ngOnInit() {

    this.countryService.getCountries().subscribe( paises => {

      this.countries = paises; 

      this.countries.unshift({

        name: '[ Seleccione un País ]',
        code: ''

      });

      console.log( this.countries );

    });


  }

  public save( forma: NgForm ) {

    // Esto es para que al dar clic al botón de Enviar y mientras algun campo no sea valido aparezcan los mensajes de error poniendo los controls de la forma como Touched ( es decir, como si hubiesen sido tocados por el usuario )
    if( forma.invalid ) {

      Object.values( forma.controls ).forEach( control =>{

        //console.log( control );

        control.markAllAsTouched();

      } );

      return; 


    }

    
    console.log(' Submit disparado ');
    console.log( forma );
    console.log( forma.value ); 

  }

}
