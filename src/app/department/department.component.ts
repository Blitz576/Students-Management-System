import { Component } from '@angular/core';
import { Department } from '../_models/department';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  newDepartment: Department = new Department(0, '');
  selectedDepartment: Department = new Department(0, '');
  isSelected: boolean = false;
  editDepartment: Department = new Department(0, '');
  isEditing: boolean = false;
  departmentsAllData: Department[] = [
    new Department(10, "Open Souce"),
    new Department(20, "Artifical Intellengce"),
    new Department(30, "Professional Web Development"),
    new Department(40, "Software Testing"),
  ];

  save() {
    this.departmentsAllData.push(new Department(this.newDepartment.id, this.newDepartment.name));
  };

  show(inputDepartment: Department) {
    this.isSelected = true;
    this.selectedDepartment.Id = inputDepartment.id;
    this.selectedDepartment.name = inputDepartment.name;
  }

  closeDepartment() {
    this.isSelected = false;
  }

  edit(targetDepartment: Department) {
    this.selectedDepartment.Id = targetDepartment.id;
    this.selectedDepartment.name = targetDepartment.name;
    this.isEditing = true;
    this.editDepartment = new Department(targetDepartment.id, targetDepartment.name);
  }

  update(name: string) {
    const index = this.departmentsAllData.findIndex(department => department.id === this.editDepartment.id);
    if (index !== -1) {
      this.departmentsAllData[index].name = name;
      this.isEditing = false;
    }
  }

  cancelEdit() {
    this.isEditing = false;
  }

  delete(targetDepartment: Department) {
    const index = this.departmentsAllData.findIndex(department => department === targetDepartment);
    if (index !== -1) {
      this.departmentsAllData.splice(index, 1);
    }
  }
}
