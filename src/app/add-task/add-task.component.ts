import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
empname=""
task=""

constructor(private api:ApiService){}

readValues=()=>{
  let data:any={
    "employeeId":localStorage.getItem("employeeInfo"),
    "task":this.task,
    "empname":this.empname}
  
  this.api.addTask(data).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.status=="success"){
        alert("Task added successfully")
        this.empname=""
        this.task=""

      }else{
        alert("something went wrong")
      }
    }
  )
}
}
