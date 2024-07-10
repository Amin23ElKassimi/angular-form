import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, observeOn, of } from 'rxjs';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {
    this.firebase.insertPersona(
      'https://corso-angular-5a5b9-default-rtdb.europe-west1.firebasedatabase.app/persone.json',
      { name: 'Alessia', email: 'aminelka@pippo.com' }
    ).subscribe(data => { console.log(data) })

  }
  ngOnDestroy(): void {

  }





}
