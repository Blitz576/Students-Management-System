import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Department } from '../../_models/department';

@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  standalone:true,
  imports:[],
  styleUrls: ['./show-department.component.css']
})
export class ShowDepartmentComponent {
  @Input() department: Department = new Department(0, "");
  // For sending close signal to department-table
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closeDepartment() {
    this.close.emit(); // Send signal
  }
}
