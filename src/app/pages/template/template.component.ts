import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  public user = {

    name: 'Juan Manuel',
    lastName: 'Lopez',
    email: 'juanmanuel@gmail.com'

  };

  constructor() { }

  ngOnInit() {
  }

  public save( forma: NgForm ) {

    // Esto es para que al dar clic al botón de Enviar y mientras algun campo no sea valido aparezcan los mensajes de error poniendo los controls de la forma como Touched ( es decir, como si hubiesen sido tocados por el usuario )
    if( forma.invalid ) {

      Object.values( forma.controls ).forEach( control =>{

        //console.log( control );

        control.markAllAsTouched();

      } );


    }

    
    console.log(' Submit disparado ');
    console.log( forma );
    console.log( forma.value ); 

  }

}
