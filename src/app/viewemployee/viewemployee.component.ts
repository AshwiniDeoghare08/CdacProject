import { Component } from '@angular/core';
import { GetemployeeService } from '../service/getemployee.service';
import { Employee } from 'src/Model/Employee';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent {
 
  employees!: Employee[];
  
  constructor(private empservice: GetemployeeService) { }

  ngOnInit() {
    this.empservice.getEmployee().subscribe((data)=>
    
    {console.log(data);
      this.employees=data});

  }

  }

