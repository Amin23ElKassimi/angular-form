import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'

})
export class ServizioProvaService {

  constructor() { }

  persone = [
    { nome: "Amin", cognome: "elkassimi", ispnline: true, color: "blue" },
    { nome: "Frank", cognome: "Bodengan", ispnline: true, color: "red" },
    { nome: "Pippo", cognome: "Hskimi", ispnline: false, color: "yellow" },
    { nome: "Alessia", cognome: "Larson", ispnline: true, color: "green" },
    { nome: "Giuseppe", cognome: "pappi", ispnline: false, color: "brown" },
    { nome: "Enzo", cognome: "zacca", ispnline: true, color: "black" },
    { nome: "Gaia", cognome: "papa", ispnline: false, color: "white" }
  ]

  getPersone() {
    return this.persone
  }

  getPersona(index: number) {
    return this.persone[index]
  }





}
