import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../../service/servizio-prova.service';
import { ActivatedRoute } from '@angular/router';

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
    private servizioProva: ServizioProvaService
  ) { }

  ngOnInit(): void {

    this.persone = this.servizioProva.getPersone()

  }

}
