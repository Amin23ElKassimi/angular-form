import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  APIKey = 'AIzaSyD8WtMJ9dwkVcG4c9052GLyo_9SIGUKr0U'
  isLoggedIn = true
  IsAdmin = true
  signUpUrl: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key==${this.APIKey}`
  signInUrl: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.APIKey}`

  constructor(private http: HttpClient) { }


  isAuthenticated() {
    return this.isLoggedIn
  }

  isRoleAdmin() {
    return this.IsAdmin
  }

  signUP(body: {}) {
    // Header, body 
    return this.http.post(this.signUpUrl, body)
  }

  signIn(body: {}) {
    // Header, body 
    return this.http.post(this.signInUrl, body)
  }

}


