import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  public static handleError(operation: String, url: string) {
    return (err: any) => {
      let errMsg = `error in ${operation}() retrieving ${url}`;
      console.log(`${errMsg}:`, err)

      if (err.status === 0) {
      }
      // window.location.href = '/server-error'
      if (err.status === 401) {
       
        window.location.href = '/feeds'
      }
      if (err.status === 404) {
        // localStorage.clear();
        window.location.href = '/feeds'
      }
      // window.location.href = '/error404'
      return throwError(errMsg);
    }
  }

 
  
}
