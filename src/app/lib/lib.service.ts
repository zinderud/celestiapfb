import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

 

@Injectable({ providedIn: 'root' })
export class LibService {

  private heroesUrl = 'api/heroes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
        "Cache-Control": "",
        "X-Requested-With": "",
        Accept: "",
      },)
  };

  constructor(
    private http: HttpClient,
 ) { }

  /** GET heroes from the server */
 
server= 'http://localhost:3000';
port= '3000';
  
  /** GET hero by id. Will 404 if id not found */
  getdata(namespace_id: number,data:string): Observable<any> {
    const url = `http://${this.server}:${this.port}/submit_pfb `  ;
    return this.http.post<any>(`http://${this.server}:${this.port}/submit_pfb`,
    `{"namespace_id": "${namespace_id}", "data": "${data}", "gas_limit": 80000, "fee": 2000}`,).pipe(
      tap(_ => this.log(`fetched  id=${namespace_id}`)),
      catchError(this.handleError<any>(`getdata id=${namespace_id}`))
    );
  }

 

 
 
 

   

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

     
      return of(result as T);
    };
  }

   private log(message: string) {
    console.log(`HeroService: ${message}`);
  }
}

 