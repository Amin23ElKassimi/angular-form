import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = true
  IsAdmin = true

  constructor() { }


  isAuthenticated() {
    return this.isLoggedIn
  }

  isRoleAdmin() {
    return this.IsAdmin
  }



}


