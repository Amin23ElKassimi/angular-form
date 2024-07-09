import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../service/servizio-prova.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent implements OnInit {

  // Variables
  persone: any
  persona: any
  isProfile: boolean

  // Constructor
  constructor(
    private servizioProva: ServizioProvaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Se c'e' un numero nell'id metti true se no metti false
    this.isProfile = !this.route.snapshot.paramMap.get("id") ? false : true
    if (this.route.snapshot.paramMap.get('id')) {
      this.isProfile = true
      this.persona = this.servizioProva.getPersona(parseInt(this.route.snapshot.paramMap.get('id')!))
    }
    else {
      this.isProfile = false
      this.persone = this.servizioProva.getPersone()
    }

    // Print id actual Route
    console.log(this.route.snapshot.paramMap.get('id'))
    console.log(this.isProfile)

  }

}
