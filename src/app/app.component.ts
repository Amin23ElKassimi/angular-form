import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Variables
  title = 'angular-form';


  constructor(private authservice: AuthService) { }


  ngOnInit(): void {

    // Se lutente e' salvato nello storage ripolpami la variabile ogni volta che si aggiorna
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem("user"))
      this.authservice.createUser(user.email, user.id, user._token, user._expirationDate)
    }

  }

  exit() {
    this.authservice.signOut()
  }



}

