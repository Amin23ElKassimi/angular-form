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

  }
  ngOnDestroy(): void {

  }





}
