import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  private apiUrl = "https://qapi.vercel.app/api/random";

  constructor(private http: HttpClient) { }

  getQuote(): Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }
}
