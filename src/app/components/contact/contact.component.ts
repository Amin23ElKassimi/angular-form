import { Component, Input, OnInit } from '@angular/core';
import { ServizioProvaService } from '../../service/servizio-prova.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  id: number
  persona: any

  constructor(
    private servizioProva: ServizioProvaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // subscribe aggiorna i cambiamenti DEL id della rotta
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')
      this.persona = this.servizioProva.getPersona((this.id))
    })
  }

}
