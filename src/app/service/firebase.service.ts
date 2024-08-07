import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  patchPerson(id: string, formdata: {}) {
    console.log(`${this.url}/${id}.json`)
    return this.http.patch(`${this.url}/${id}.json`, formdata)
  }

  getPersonaById(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}.json`);
  }




}
