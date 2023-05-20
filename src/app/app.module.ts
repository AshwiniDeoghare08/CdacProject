import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { Login1Component } from './login1/login1.component';
import { Register1Component } from './register1/register1.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';

import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisteruserComponent,
    Login1Component,
    Register1Component,
    ViewemployeeComponent,
    NavigationbarComponent,
    EmployeeListComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
