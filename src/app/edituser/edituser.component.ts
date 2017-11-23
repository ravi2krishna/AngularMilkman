import { environment } from './../../environments/environment.prod';
import { Users } from './../services/usersService';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent  {
  array2: any = {};
  har = false;
  message;
  array3: any = {
    data: {}
  };
  data: any;
  url = environment.api;

  constructor(private user:Users,private http:HttpClient) {
  this.data = user.getData();
  console.log(this.data.data.name);
  console.log(this.data);

   }


  updateUser(data){
    this.array2=data.data;
    this.array3.data = this.array2;
    console.log(this.array3);
    //console.log(this.array2.status);
    //console.log(this.array2);
    return this.http.put(this.url+"user/",this.array3).subscribe(
      response => { 
        this.har = true;
        this.message = "successfully updated";
     // console.log(this.message);
        console.log(response);
       
      }
    )

   }

 

}
