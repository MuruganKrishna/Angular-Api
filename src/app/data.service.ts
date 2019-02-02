import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http'
import {User} from './user.model';
import {Usercount} from "./usercount.model";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  // apiurl="http://localhost:3000/api/v1/salaries";
  // constructor(private _http: HttpClient) { 
   
  // }
  // getUsers()
  // {
  //    return this._http.get<User[]>(this.apiurl);
  // }
  // setUser(obj)
  // {
    
  //   console.log(obj)
  //   this._http.post(this.apiurl,obj,{headers:new HttpHeaders({'content-Type':'application/json'})}).subscribe(res => {
  //     console.log(res)
  //   })
 // }



}
//this.dataservice.setUser().subscribe(data => {
  //   console.log(data)
  //   this.user$
   
  // });