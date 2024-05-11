import { Injectable, Type } from '@angular/core';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

//   // Student
//  type StudentStructure={
    
//   }
 
  //All Students
  private studentsAllData:Student[]=[
  new Student(10,25,"ahmed nagy"),
  new Student(20,25,"Mohamed Ismail"),
  new Student(30,26,"Ahmed Mahrous"),
  new Student(40,35,"3mo samy"),
 ];

 // Selected Student
   

  constructor() { }
 
  getAll() :Student[]{
    return this.studentsAllData;
  }

 //create new student
 save(newStudent:Student){
  //get the last studnet id
  let lastStudentId:number = this.studentsAllData[this.studentsAllData.length-1].id;
  lastStudentId+=10;

  newStudent.Id=lastStudentId;
  this.studentsAllData.push(new Student(newStudent.id,newStudent.age,newStudent.name));
 };

 //Update A Student
  update(updatedStudent: Student) {    
    console.log("update");
    const index = this.studentsAllData.findIndex(student => student.id === updatedStudent.id);
    if (index !== -1) {
      this.studentsAllData[index] = updatedStudent;
    }
  }

 //Delete A Student
 delete(targetStudent: Student) {
  const index = this.studentsAllData.findIndex(student => student === targetStudent);
  if (index !== -1) {
    this.studentsAllData.splice(index, 1);
  }
 }
}
