import { Component } from '@angular/core';
import { Student } from '../_models/student';
import { CommonModule, formatNumber } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css'
})
export class StudentsListComponent {
 // Intial Objects For Student Operations
 newStudent:Student= new Student(0,0,"");
 selectedStudent:Student = new Student(0,0,""); //show a stduent
 isSelected:boolean = false; //control showing a student
 editStudent:Student= new Student(0,0,"");
 isStudentComponent:boolean=true; //render student component
 isDepartmentComponent:boolean=true; //render department component
 isEditing:boolean=false; //is editing
  studentsAllData:Student[]=[
  new Student(10,25,"ahmed nagy"),
  new Student(20,25,"Mohamed Ismail"),
  new Student(30,26,"Ahmed Mahrous"),
  new Student(40,35,"3mo samy"),
 ];
 
 


 //create new student
 save(){
  this.studentsAllData.push(new Student(this.newStudent.id,this.newStudent.age,this.newStudent.name));
 };

 // Show Student
 show(inputStudent:Student) {
  this.isSelected=true; // Enable Disaplying Student
  this.selectedStudent.Id = inputStudent.id;
  this.selectedStudent.name= inputStudent.name;
  this.selectedStudent.age= inputStudent.age;
 }
 closeStudent(){
  this.isSelected=false;
 }
 
 edit(targetStudent: Student) {
  this.selectedStudent.Id=targetStudent.id;
  this.selectedStudent.age=targetStudent.age;
  this.selectedStudent.name=targetStudent.name;
  this.isEditing = true;
  this.editStudent = new Student(targetStudent.id, targetStudent.age, targetStudent.name);
}

update(name:string,ageString:string) {
  const age: number = parseInt(ageString, 10);
  const index = this.studentsAllData.findIndex(student => student.id === this.editStudent.id);
  if (index !== -1) {
    this.studentsAllData[index].name = name;
    this.studentsAllData[index].age = age;
    this.isEditing = false; // exit edit mode
  }
}

cancelEdit() {
  this.isEditing = false;
}

//delete a student
 delete(targetStudent: Student) {
  const index = this.studentsAllData.findIndex(student => student === targetStudent);
  if (index !== -1) {
    this.studentsAllData.splice(index, 1);
  }
 }

}
