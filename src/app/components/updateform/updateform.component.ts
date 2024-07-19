import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../..//service/firebase.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss']
})
export class UpdateformComponent implements OnInit {

  persone: any

  homeform!: FormGroup;
  actualID: string

  constructor(private fireBase: FirebaseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.actualID = params.get('id');
    });
    this.homeform = new FormGroup({
      // Define your form controls and validators here
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      color: new FormControl('', Validators.required),
      intext: new FormControl('', Validators.required),

    })
    console.log(this.actualID)
    // Ascolta i cambiamenti nei parametri della rotta
    this.route.paramMap.subscribe(params => {
      this.actualID = params.get('id');
      this.loadPersonaData();
    });

  }

  // Carica i dati della persona e aggiorna il modulo
  loadPersonaData(): void {
    if (this.actualID) {
      this.fireBase.getPersonaById(this.actualID).subscribe((persona: any) => {
        this.homeform.patchValue({
          name: persona.name,
          email: persona.email,
          color: persona.color,
          intext: persona.intext,
        });
      });
    }
  }

  onSubmit(): void {

    this.fireBase.patchPerson(this.actualID,
      {
        name: this.homeform.value.name,
        email: this.homeform.value.email,
        color: this.homeform.value.color,
        intext: this.homeform.value.intext
      }
    ).subscribe(data => { console.log(data) })


  }

  lodid() {
    console.log(this.actualID)
  }





}
