import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { DepartmentComponent } from './department/department.component';
import { StudentTableComponent } from './StudentCrud/student-table/student-table.component';
import { CreateStudentComponent } from "./StudentCrud/create-student/create-student.component";
import { CreateDepartmentComponent } from "./DepartmentCrud/create-department/create-department.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, StudentComponent, StudentTableComponent, HomeComponent, StudentsListComponent, DepartmentComponent,FormsModule]
})
export class AppComponent {
  title = 'student-management-system';
  isStudentComponent:boolean = true;
  isDepartmentComponent:boolean = false;
  
  // change component
  renderComponent(option:string){
    if(option == "student"){
      console.log("true");
      this.isDepartmentComponent=false;
      this.isStudentComponent=true;
    }
    else{
      console.log("not");
      this.isDepartmentComponent=true;
      this.isStudentComponent=false;
    }
  }
}
