import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  private apiUrl = "https://api.chucknorris.io/jokes/random";
  private catUrl = "https://api.chucknorris.io/jokes/categories";
  constructor(private http: HttpClient) { }

  getJokes(): Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

  getCategories(): Observable<any>{
    return this.http.get(`${this.catUrl}`);
  }
}
