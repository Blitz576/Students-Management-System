import { Component } from '@angular/core';
import { Department } from '../../_models/department';
import { FormsModule } from '@angular/forms';
import { CreateDepartmentComponent } from '../create-department/create-department.component';
import { EditDepartmentComponent } from '../edit-department/edit-department.component';
import { ShowDepartmentComponent } from '../show-department/show-department.component';
import { DepartmentService } from '../../_service/department.service.spec';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
  imports:[CommonModule,FormsModule,CreateDepartmentComponent,EditDepartmentComponent, ShowDepartmentComponent ],
  standalone:true,
  styleUrls: ['./department-table.component.css']
})
export class DepartmentTableComponent {

  constructor(public departmentService: DepartmentService) { }

  // Components Control
  openEditComponent: boolean = false;
  openShowComponent: boolean = false;

  // Load All Departments
  allDepartmentsData: Department[] = this.departmentService.getAll();

  // Render element
  selectedItem: Department = new Department(0, "");

  show(item: Department) {
    this.selectedItem = item;
    this.openShowComponent = true;
  }

  // Close show department component
  closeShowComponent() {
    this.openShowComponent = false;
  }

  edit(item: Department) {
    this.selectedItem = item;
    this.openEditComponent = true;
  }
  
  // Close Edit Component
  closeEditComponent() {
    this.openEditComponent = false;
  }
  
  delete(item: Department) {
    this.departmentService.delete(item);
  }
}
