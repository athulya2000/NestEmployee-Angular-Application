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
  let data:any={"empname":this.empname,"task":this.task}
  console.log(data)
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
