import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private apiUrl="https://pokeapi.co/api/v2/pokemon/";
  private limit=151;
  private offset=0;
  constructor(private http: HttpClient) { }

  getListPokemones(): Observable<any>{
    return this.http.get(`${this.apiUrl}?limit=${this.limit}&offset=${this.offset}`);

  }

  getDetailPokemon(urlPokemon:any):Observable<any>{
    return this.http.get(urlPokemon);
  }
}