import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon');
  }

  private log(response: any) {
    console.table(response);
  }
  
  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
