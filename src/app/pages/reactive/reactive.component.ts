import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  public forma: FormGroup;

  // FormBuilder es un servicio que nos ayuda a crear formularios reactivos mas facilmente 
  constructor( private formBuilder: FormBuilder ) {

    this.createForm();

  }

  ngOnInit() {
  }

  public createForm() {

    // La primera posicion es el valor por defecto, la segunda es para las validaciones sincronas y la tercera paras las validaciones asincronas 
    this.forma = this.formBuilder.group({

      name: [ '', [ Validators.required, Validators.minLength(5) ] ],
      lastName: [ '', [ Validators.required, Validators.minLength(5) ] ],
      email: [ '', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') ] ]

    });


  }

  public save() {

    console.log( this.forma ); 

  }

}
