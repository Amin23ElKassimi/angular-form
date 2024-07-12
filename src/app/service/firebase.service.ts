import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }

  // Url FIREBASE
  url: string = 'https://corso-angular-5a5b9-default-rtdb.europe-west1.firebasedatabase.app/persone.json'

  insertPersona(body: {}) {
    return this.http.post(this.url, body)
  }


  getPersone() {
    return this.http.get(this.url)
  }


}
