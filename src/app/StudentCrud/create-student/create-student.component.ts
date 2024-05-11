import { Component } from '@angular/core';
import { Student } from '../../_models/student';
import { StudentService } from '../../_service/student.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent {
 //new Student
 newStudent:Student= new Student(0,0,"");
 
 constructor(public studentServe:StudentService){}

 save(){
   this.studentServe.save(this.newStudent);
 }
 
}
