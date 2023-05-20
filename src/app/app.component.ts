import { Component } from '@angular/core';
import { RegisterserviceService } from './service/registerservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demoproject';

  // users:any;
  // constructor(private userdata:RegisterserviceService){
  //    userdata.users().subscribe((data)=>
  //    {
    
  //    console.log(data);
  //   this.users=data;});
   
  
  //   }
    
}
