import { environment } from './../../environments/environment.prod';
import { Add } from './../entities/add';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent  {

  user = new Add();
  data: any = {};
  array2: any = {};
  url = environment.api;
  har = false;
  message;

  constructor(private http:HttpClient) {
  
   }

  addUser(userinfo){
    this.har = true;
     this.message = "User added Successfully...Please click on Users Tab to check.....,";
    this.array2.data = userinfo;
    this.array2.data.active = true;
    this.array2.data.salt = "******";
    this.array2.data.id = null;
    console.log(userinfo);
    console.log(this.array2);
    return this.http.put(this.url+"user/",this.array2).subscribe(
      response => { 
      console.log(this.message);
        console.log(response);
       
      }
    )
  }
}



