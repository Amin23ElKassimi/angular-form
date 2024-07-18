import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }

  // Url FIREBASE
  url: string = 'https://corso-angular-5a5b9-default-rtdb.europe-west1.firebasedatabase.app/persone'

  insertPersona(body: {}) {
    return this.http.post(this.url + ".json", body)
  }


  getPersone() {
    return this.http.get(this.url + ".json")
  }


  deletePersona(id: string) {
    return this.http.delete(`${this.url}/${id}.json`)
  }

  patchPerson(id: string, body: {}) {
    console.log(`${this.url}/${id}.json`)
    return this.http.patch(`${this.url}/${id}.json`, body)
  }


}
