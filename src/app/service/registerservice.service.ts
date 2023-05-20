import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  constructor(private http:HttpClient) { }

  saveEmployee(emp:any):Observable<any>{
    //return this.http.get("https://jsonplaceholder.typicode.com/posts/1");
    return this.http.post("http://localhost:9090/registeremp",emp);
  }


 
  }


