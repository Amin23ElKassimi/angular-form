import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../../service/servizio-prova.service';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent implements OnInit {

  // Variables
  persone: any
  people: any
  actualID: string

  // Constructor
  constructor(
    private servizioProva: ServizioProvaService,
    private fireBase: FirebaseService
  ) { }

  ngOnInit(): void {

    this.people = this.fireBase.getPersone()

    this.fireBase.getPersone().subscribe((data: any) => {
      this.persone = Object.keys(data).map((key) => {
        // Aggiungere la proprieta che si chiama id e la fai uguale a data.key che genera firebase
        data[key]['id'] = key
        return data[key]
      })
    })

  }

  onDeletePersona() {
    this.fireBase.deletePersona(this.actualID)
      .subscribe(data => {
        console.log(data)

      })
  }


  logid() {
    // this.actualID =
    console.log("actual id: " + this.actualID)
    console.log(this.people)
  }




}
