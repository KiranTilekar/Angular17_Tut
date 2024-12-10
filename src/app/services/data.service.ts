import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8080/users';

  constructor(private http : HttpClient) { }

  getData () {
    return ['data1', 'data2'];
  }

  getPosts() : Observable<any> {

    return this.http.get(this.apiUrl);
  }

  getUsers() : Observable<User[]> {

    return this.http.get<User[]>(this.apiUrl)
  }

}
