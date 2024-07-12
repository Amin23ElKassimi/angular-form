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

  // Constructor
  constructor(
    private servizioProva: ServizioProvaService,
    private fireBase: FirebaseService
  ) { }

  ngOnInit(): void {

    // this.persone = this.servizioProva.getPersone()
    this.persone = this.fireBase.getPersone()

  }

}
