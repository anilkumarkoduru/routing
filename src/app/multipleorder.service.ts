import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MultipleorderService {

  constructor(private http : HttpClient) { }
  configUrl='../assets/Data/multipleorder.json';
  getData(){


    return this.http.get(this.configUrl)
    
  }
}
