import { Component } from '@angular/core';
import { EditStudentComponent } from '../edit-student/edit-student.component';
import { Student } from '../../_models/student';
import { StudentService } from '../../_service/student.service';
import { ShowStudentComponent } from "../show-student/show-student.component";
import { CommonModule } from '@angular/common';
import { CreateStudentComponent } from "../create-student/create-student.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-student-table',
    standalone: true,
    templateUrl: './student-table.component.html',
    styleUrl: './student-table.component.css',
    imports: [CommonModule, FormsModule , EditStudentComponent, ShowStudentComponent, CreateStudentComponent]
})
export class StudentTableComponent {

  constructor (public studentServe:StudentService){ } //get service

  //Components Control
  openEditComponent:boolean=false;
  openShowComponent:boolean=false;
  
  //Load All Students
  allStudentsData:any = this.studentServe.getAll();
  
   
  
  //render element
  selectedItem:Student= new Student(0,0,"");



  show(item:Student){
   this.selectedItem=item;
   this.openShowComponent=true;
  }

  //close show student component
  closeShowComponent() {
  this.openShowComponent= false;
  }

  edit(item:Student){
    this.selectedItem=item;
    this.openEditComponent=true;
  }
  //close Edit Component
  closeEditComponent(){
    this.openEditComponent=false;
  }
  
  delete(item:Student){
     this.studentServe.delete(item);
  }   

}
