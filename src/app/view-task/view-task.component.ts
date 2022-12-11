import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent {
 employeeId:any=""
 constructor(private api:ApiService){
  this.employeeId=localStorage.getItem("employeeInfo")
    let data:any={"employeeId":this.employeeId}
    this.api.viewTask(data).subscribe(
      (response:any)=>{
        console.log(response)
        this.data=response
      }
    )
 }

 data:any=[]

 
 }
  



