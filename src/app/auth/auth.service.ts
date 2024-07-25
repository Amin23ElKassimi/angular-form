import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = true
  IsAdmin = true
  url: string = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD8WtMJ9dwkVcG4c9052GLyo_9SIGUKr0U"

  constructor(private http: HttpClient) { }


  isAuthenticated() {
    return this.isLoggedIn
  }

  isRoleAdmin() {
    return this.IsAdmin
  }

  signUP(body: {}) {
    // Header, body
    return this.http.post(this.url, body)
  }

}


