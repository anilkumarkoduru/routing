import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SingleorderserviceService {

  constructor( private http: HttpClient ) { }
  configUrl = 'assets/Data/singleorder.json'
 
  getData(){
    return this.http.get(this.configUrl)
    //console.log('Single Sevice Called')
  }
}
