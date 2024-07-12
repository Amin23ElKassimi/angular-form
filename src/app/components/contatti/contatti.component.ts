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

  // Constructor
  constructor(
    private servizioProva: ServizioProvaService,
    private fireBase: FirebaseService
  ) { }

  ngOnInit(): void {

    this.people = this.servizioProva.getPersone()
    console.log(this.people)

    this.fireBase.getPersone().subscribe((data: any) => {
      this.persone = Object.keys(data).map((key) => { return data[key] })
    })



  }

}
