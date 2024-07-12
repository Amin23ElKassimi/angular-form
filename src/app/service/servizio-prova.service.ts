import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'

})
export class ServizioProvaService {

  constructor() { }

  persone = [
    { nome: "Amin", cognome: "elkassimi", isOnline: true, color: "blue" },
    { nome: "Frank", cognome: "Bodengan", isOnline: true, color: "red" },
    { nome: "Pippo", cognome: "Hskimi", isOnline: false, color: "yellow" },
    { nome: "Alessia", cognome: "Larson", isOnline: true, color: "green" },
    { nome: "Giuseppe", cognome: "pappi", isOnline: false, color: "brown" },
    { nome: "Enzo", cognome: "zacca", isOnline: true, color: "aqua" },
    { nome: "Gaia", cognome: "papa", isOnline: false, color: "deeppink" }
  ]

  getPersone() {
    return this.persone
  }

  getPersona(index: number) {
    return this.persone[index]
  }





}
