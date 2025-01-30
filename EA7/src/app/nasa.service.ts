import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod';
  private apiKey = 'mOP0x5PK9LamvUX6C2Dim2VghoLefffmjQGWLmKQ';

  constructor(private http: HttpClient) {}

  getImageByDate(date: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?date=${date}&api_key=${this.apiKey}`);
  }
}
