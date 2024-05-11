import { Component } from '@angular/core';
import { Department } from '../../_models/department';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../_service/department.service.spec';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  standalone:true,
  imports:[FormsModule],
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent {
  // New Department
  newDepartment: Department = new Department(0, "");

  constructor(public departmentService: DepartmentService) { }

  save() {
    this.departmentService.save(this.newDepartment);
    this.newDepartment = new Department(0, ""); // Reset form
  }
}
