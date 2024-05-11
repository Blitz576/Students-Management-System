import { Injectable } from '@angular/core';
import { Department } from '../_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departmentsAllData: Department[] = [
    new Department(10, "IT"),
    new Department(20, "HR"),
    new Department(30, "Marketing"),
    new Department(40, "Finance"),
  ];

  constructor() {}

  getAll(): Department[] {
    return this.departmentsAllData;
  }

  save(newDepartment: Department) {
    let lastDepartmentId: number = this.departmentsAllData[this.departmentsAllData.length - 1].id;
    lastDepartmentId += 10;
    newDepartment.id = lastDepartmentId;
    this.departmentsAllData.push(new Department(newDepartment.id, newDepartment.name));
  }

  update(updatedDepartment: Department) {
    const index = this.departmentsAllData.findIndex(department => department.id === updatedDepartment.id);
    if (index !== -1) {
      this.departmentsAllData[index] = updatedDepartment;
    }
  }

  delete(targetDepartment: Department) {
    const index = this.departmentsAllData.findIndex(department => department === targetDepartment);
    if (index !== -1) {
      this.departmentsAllData.splice(index, 1);
    }
  }
}
