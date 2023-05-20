import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { HomeComponent } from './home/home.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent

  },
 { path:'login',
  component:LoginComponent
 },
 {
  path:'register',
  component:RegisterComponent
 },
 {
  path:'getall',
  component:ViewemployeeComponent
 },
 {
  path:'delete',
  component:DeleteEmployeeComponent
 }
 ,
 {
  path:'edit',
  component:EditEmployeeComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
