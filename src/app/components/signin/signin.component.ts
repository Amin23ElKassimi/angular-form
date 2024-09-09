import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
    private authservice: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    // console.log(email, password)
    form.reset()
    this.authservice.signIn({ email: email, password: password, returnSecureToken: true }).subscribe(
      (data: any) => {
        console.log(data)
        // passiamo i dati dell'utente ricevuti nella post
        this.authservice.createUser(data.email, data.localId, data.idToken, data.expiresIn)
        // Salviamo i dati dell'utente in localstorage
        localStorage.setItem('user', JSON.stringify(this.authservice.user))
      }
    )
  }
}
