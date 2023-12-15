import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { CatFact } from './catfact';

@Injectable({
  providedIn: 'root'
})
export class CatFactService {
  getCatFact(): Observable<CatFact[]> {
    return this.http.get<CatFact[]>('https://catfact.ninja/fact').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>('https://catfact.ninja/fact');
  }

  private log(response: any) {
    console.table(response);
  }
  
  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
