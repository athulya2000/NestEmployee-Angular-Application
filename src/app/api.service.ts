import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient ) { }

  addEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/addemployee",data)
  }
  addTask=(add:any)=>{
    return this.http.post("http://localhost:8080/addtask",add)
  }
  employeeLogin=(login:any)=>{
    return this.http.post("http://localhost:8080/employeelogin",login)
  }
  viewTask=(view:any)=>{
    return this.http.post("http://localhost:8080/viewtask",view)
  }

    
  
  
}
