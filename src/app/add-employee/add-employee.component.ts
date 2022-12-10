import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  
empcode=""
empname=""
designation=""
salary=""
phoneno=""
emailid=""
password=""
companywebsite=""

constructor(private api:ApiService){}

readValues=()=>{
  let add:any={"empcode":this.empcode,"empname":this.empname,"designation":this.designation,"salary":this.salary,"phoneno":this.phoneno,"emailid":this.emailid,"password":this.password,"companywebsite":this.companywebsite}
  console.log(add)
  this.api.addEmployee(add).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.status=="success"){
        alert("Employee added successfully")
         this.empcode=""
         this.empname=""
         this.designation=""
         this.salary=""
         this.phoneno=""
         this.emailid=""
         this.password=""
         this.companywebsite=""
      }
      else{
        alert("something went wrong")
      }
    }
  )
  
}

}
