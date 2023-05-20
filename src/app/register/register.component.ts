import { Component, OnInit } from '@angular/core';
import { RegisterserviceService } from '../service/registerservice.service';
import { Employee } from 'src/Model/Employee';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  // employees!: Employee[];

  employee:Employee= {
    emp_Id: 0,
    emp_Name: '',
    emp_Designation: '',
    emp_Expertise: '',
    emp_status: '',
    emp_Doj: '',
    emp_Lastdate: ''
  };
  submitted = false;
  
  constructor(private empservice: RegisterserviceService) { }

  // saveEmployee() {
  //   this.empservice.saveEmployee(Employee).subscribe((data)=>
    
  //   {console.log(data);
  //     this.employees=data});
      
    
      ngOnInit(): void {
      }
    
      saveEmployee(): void {
        const data = {
          id: this.employee.emp_Id,
          name: this.employee.emp_Name,
          designation:this.employee.emp_Designation,
          expertise:this.employee.emp_Expertise,
          Status:this.employee.emp_status,
          doj:this.employee.emp_Doj,
          lastdate:this.employee.emp_Lastdate
        };
    
        this.empservice.saveEmployee(data)
          .subscribe({
            next: (res:any) => {
              console.log(res);
              this.submitted = true;
            },
            error: (e:any) => console.error(e)
          });
      }
    
      // newTutorial(): void {
      //   this.submitted = false;
      //   this.employee = {
      //     title: '',
      //     description: '',
      //     published: false
      //   };
      }



