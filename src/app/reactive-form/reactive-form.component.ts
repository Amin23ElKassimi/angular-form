import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  homeform!: FormGroup;


  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {


    this.homeform = new FormGroup({
      // Define your form controls and validators here
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      color: new FormControl(''),
      intext: new FormControl(''),

    })


  }

  onSubmit(): void {
    console.log(this.homeform)

    this.firebase.insertPersona(
      'https://corso-angular-5a5b9-default-rtdb.europe-west1.firebasedatabase.app/persone.json',
      { name: this.homeform.value.name, email: this.homeform.value.email }
    ).subscribe(data => { console.log(data) })

  }


}
