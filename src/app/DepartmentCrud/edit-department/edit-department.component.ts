import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Department } from '../../_models/department';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../_service/department.service.spec';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  imports:[FormsModule],
  standalone:true,
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent {
  @Input() department: Department = new Department(0, "");
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  constructor(public departmentService: DepartmentService) {}

  cancelEdit() {
    this.cancel.emit();
  }

  update() {
    this.departmentService.update(this.department);
    this.cancel.emit();
  }
}
