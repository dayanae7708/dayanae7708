import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiResponse } from './model/heroi';
  
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( private http :HttpClient) { }
  getUsers =() :Observable<apiResponse> =>{
    return this.http.get<apiResponse>("https://reqres.in/api/users");
  }      
}
