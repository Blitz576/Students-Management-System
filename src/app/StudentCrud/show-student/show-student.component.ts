import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../_models/student';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  standalone:true,
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent {
  @Input() student: Student = new Student(0, 0, "");
  //for sending close signal to student-table
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closeStudent() {
    this.close.emit(); //send signal
  }
}
