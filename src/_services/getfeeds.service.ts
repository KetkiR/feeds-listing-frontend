import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import {environment} from '../environments/environment';
import { GlobalService } from '../_services/global.service'


const devUrl = environment.backendurl;

@Injectable({
  providedIn: 'root'
})
export class GetfeedsService {

  constructor(private http:HttpClient) { }

  getFeedsListing(data){
    let url = devUrl + "getfeeds" + data;
    return this.http.get(url).pipe(
      map(response=>{return response}),
      catchError(GlobalService.handleError('get feeds',url))
    )
  }
}
