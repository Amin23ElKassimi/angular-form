import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../service/servizio-prova.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent implements OnInit {

  persone: any

  constructor(private servizioProva: ServizioProvaService) {

  }

  ngOnInit(): void {
    this.persone = this.servizioProva.getPersone()

  }

}
