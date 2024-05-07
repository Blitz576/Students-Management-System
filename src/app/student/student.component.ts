import { Component } from '@angular/core';
import { Student } from '../_models/student';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
 id:number=220;
 name:string="ahmed";
 age:number=30;

 studentObject:Student=new Student(1000,20,"mahrous");
 

}
