import { Component, Input, OnInit } from '@angular/core';
import { ServizioProvaService } from '../../service/servizio-prova.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FirebaseService } from 'src/app/service/firebase.service';
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
    private route: ActivatedRoute,
    private fireBase: FirebaseService
  ) { }

  ngOnInit(): void {

    // subscribe aggiorna i cambiamenti DEL id della rotta
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')
      this.fireBase.getPersone().subscribe((data: any) => {
        const persone = Object.keys(data).map(key => data[key]);
        this.persona = persone[this.id];
      });
    })






  }

}
