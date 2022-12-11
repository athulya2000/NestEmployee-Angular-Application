import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {

  emailid=""
  password=""

  constructor(private api:ApiService,private route:Router){}

  readValues=()=>{
    let data:any={"emailid":this.emailid,"password":this.password}
    console.log(data)
    this.api.employeeLogin(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success")
        this.emailid=""
        this.password=""
        let employeeId=response.employeeId
        console.log(employeeId)
        localStorage.setItem("employeeInfo",employeeId)
        this.route.navigate(['/viewtask'])
      }
    )
    
  }

}
