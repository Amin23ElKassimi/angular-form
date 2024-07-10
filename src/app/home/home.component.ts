import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, observeOn, of } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

  // Code Edoardo midali 
  // sbuscrition: any
  // ngOnInit(): void {

  //   this.sbuscrition = interval(1000).subscribe(num => {
  //     console.log(num)
  //   })

  // }
  // ngOnDestroy(): void {

  //   this.sbuscrition.unsubscribe()

  // }


  //   Executing Observables(Eseguire Osservabili)
  // L'esecuzione di un osservabile avviene quando un osservatore si sottoscrive ad esso. 
  // A quel punto, l'osservabile inizia a emettere i valori agli osservatori sottoscritti. 
  // Questo processo può includere la gestione di operazioni asincrone come richieste HTTP, eventi di interfaccia utente, ecc.
  ngOnInit(): void {
    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      setTimeout(() => {
        subscriber.next(3);
        subscriber.complete();
      }, 1000);


    });

    observable.subscribe({
      next(value) { console.log(value); },
      complete() { console.log('Completato'); }
    });

  }
  ngOnDestroy(): void {

  }





}
