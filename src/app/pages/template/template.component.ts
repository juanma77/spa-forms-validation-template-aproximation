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

    
    console.log(' Submit disparado ');
    console.log( forma );
    console.log( forma.value ); 

  }

}
