import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../_models/student';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../_service/student.service';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent {
  @Input()
  student:Student = new Student(0,0,"");

  @Output() cancel: EventEmitter<any> = new EventEmitter();
  

  constructor(public studentServe:StudentService) {}

  cancelEdit(){
    this.cancel.emit();
  }
  update(){
    this.studentServe.update(this.student);
    this.cancel.emit();
  }
}
