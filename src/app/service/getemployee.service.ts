import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetemployeeService {

  constructor(private http:HttpClient) { }

  getEmployee(): Observable<any>
  {
    return this.http.get("http://localhost:9090/searchall");
  }
}
