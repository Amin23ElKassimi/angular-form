import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  homeform!: FormGroup;


  constructor() { }

  ngOnInit(): void {

    
    this.homeform = new FormGroup({
      // Define your form controls and validators here
      name: new FormControl ('', Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
      color: new FormControl(''), 
      intext: new FormControl(''),
       
    })

  }

  onSubmit(): void{
    console.log(this.homeform)
  }

}
