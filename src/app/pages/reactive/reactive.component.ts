import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  public forma: FormGroup;

  // FormBuilder es un servicio que nos ayuda a crear formularios reactivos mas facilmente 
  constructor( private formBuilder: FormBuilder, private validatorsService: ValidatorsService ) {

    this.createForm();
    this.loadDataToForm();

  }

  ngOnInit() {
  }

  public createForm() {

    // La primera posicion es el valor por defecto, la segunda es para las validaciones sincronas y la tercera paras las validaciones asincronas 
    this.forma = this.formBuilder.group({

      name: [ '', [ Validators.required, Validators.minLength(5) ] ],

      lastName: [ '', [ Validators.required, Validators.minLength(5), this.validatorsService.noHerrera ] ],

      email: [ '', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') ] ],

      user: [ '', , this.validatorsService.userExists ],

      firstPassword: [ '', Validators.required ],
      secondPassword: [ '', Validators.required ],
      
      address : this.formBuilder.group({

        district: [ '', Validators.required ],
        city: [ '', Validators.required ]


      }),

      hobbies: this.formBuilder.array([
       
      ])

    }, {

      validators: this.validatorsService.checkSamePasswords( 'firstPassword', 'secondPassword' )


    });


  }

  public save() {

    console.log( this.forma ); 

     // Esto es para que al dar clic al botón de Enviar y mientras algun campo no sea valido aparezcan los mensajes de error poniendo los controls de la forma como Touched ( es decir, como si hubiesen sido tocados por el usuario )
     if( this.forma.invalid ) {

      return Object.values( this.forma.controls ).forEach( control =>{

        //console.log( control );

        if( control instanceof FormGroup) {

          Object.values( control.controls ).forEach( control => {

            control.markAllAsTouched();

          });

        } else {

          control.markAllAsTouched();


        }


      } );


    }


  }

  public get notValidName() {

    return this.forma.get('name').invalid && this.forma.get('name').touched;

  }

  public get notValidLastName() {

    return this.forma.get('lastName').invalid && this.forma.get('lastName').touched;

  }

  public get notValidEmail() {

    return this.forma.get('email').invalid && this.forma.get('email').touched;

  }

  public get notValidDistrict() {

    return this.forma.get('address.district').invalid && this.forma.get('address.district').touched;

  }

  public get notValidCity() {

    return this.forma.get('address.city').invalid && this.forma.get('address.city').touched;

  }

  public get notValidFirstPassword() {

    return this.forma.get('firstPassword').invalid && this.forma.get('firstPassword').touched;

  }

  public get notValidSecondPassword() {

    const passOne = this.forma.get('firstPassword').value;
    const passTwo = this.forma.get('secondPassword').value;

    
    // Veerificamos si passOne es igual a passTwo, en caso de no ser cierto se ejecuta lo que esta luego del signo de interrogacion ("?)", en caso de ser cierto se ejeuta lo que esta luego de los dos puntos ":"; es decir regresa false y true en cada caso respectivamente 
    return passOne === passTwo ? false: true; 

  }


  loadDataToForm() {

    //this.forma.setValue({
    this.forma.reset({

      name: 'alvaro',
      lastName: 'lopez',
      email: 'al@gmail.com',
      address: {

        district: 'Santa Lucía',
        city: 'ags'

      }

    });

    // Esto es para cargar la data en los campos de hobbies del formulario; es diferente a lo de arriba, aunque podriamos usar tambien el setValue, mas sin embargo esto seria contraproducente 
    ['Dormir', 'Comer'].forEach( valor  =>{

      this.hobbies.push( this.formBuilder.control( valor ) );

    })


  }

  // Para hacer referencia al formArrayName
  public get hobbies() {

    return this.forma.get('hobbies') as FormArray; 

  }

  // Para agregar un nuevo pasatiempo al dar clic al botón de Agregar 
  public addHobbie() {

    this.hobbies.push( this.formBuilder.control( '') );

  }

  // Para borrar un pasatiempo
  public deleteHobbie( i: number ) {

    this.hobbies.removeAt( i ); 

  }

  public get notValidUser() {

    return this.forma.get('user').invalid && this.forma.get('user').touched; 


  }



}
