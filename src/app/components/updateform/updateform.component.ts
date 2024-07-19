import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../..//service/firebase.service';
@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss']
})
export class UpdateformComponent implements OnInit {


  homeform!: FormGroup;


  constructor(private fireBase: FirebaseService
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
  }




}
