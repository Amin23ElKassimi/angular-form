import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../service/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  homeform!: FormGroup;


  constructor(private fireBase: FirebaseService,
    private router: Router
  ) { }

  ngOnInit(): void {


    this.homeform = new FormGroup({
      // Define your form controls and validators here
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      color: new FormControl('', Validators.required),
      intext: new FormControl('', Validators.required),

    })


  }

  onSubmit(): void {
    console.log(this.homeform)

    this.fireBase.insertPersona(
      {
        name: this.homeform.value.name,
        email: this.homeform.value.email,
        color: this.homeform.value.color,
        intext: this.homeform.value.intext
      }
    ).subscribe(data => { console.log(data) })

    // Dopo aver inviato i dati, aggiungi un timeout di 1 secondo prima di reindirizzare
    setTimeout(() => {
      this.router.navigate(['/contatti']);
    }, 500);

  }

  onDeletePersona() {
    this.fireBase.deletePersona('-O1aipUuGQHBlvSr92wN')
      .subscribe(data => {
        console.log(data)

      })
  }



}
