import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from './data';
import { map, Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class TabsDataService {

  constructor(private http:HttpClient) { }
 configUrl = 'assets/data.json'
   getData():Observable<any[]>{
    return this.http.get<any[]>(this.configUrl);
  }
}
