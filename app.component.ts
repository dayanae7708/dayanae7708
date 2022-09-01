import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { apiResponse } from './model/heroi';
import { CommonService } from './common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sampleProject';
  todo:any =null;
  //data :any;
  users$:Observable<apiResponse> =new Observable();
  constructor(private http:HttpClient,private data :CommonService){}
  ngOnInit (){
    this.users$=this.data.getUsers();
    console.log( this.users$)

  };
  users =():Observable<apiResponse> =>{
    return this.http.post<apiResponse>("http://reqres.in/api/users",{details}); 
  }
}
