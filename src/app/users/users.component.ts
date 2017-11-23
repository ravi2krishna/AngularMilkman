import { router } from './../app.router';
import { Users } from './../services/usersService';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  vr : any;
  dataarray : any = {};
  url = environment.api;
  
  constructor(private http:HttpClient,private user:Users,public router:Router) { 
       this.getdata();

       
     
  }

  getdata(){

    return this.http.post(this.url+"user/",[]).subscribe(
      d =>{

      this.vr=d;
      this.dataarray = this.vr.data;
      console.log(this.vr);
      console.log(this.dataarray);

      }
    )


  }

  deleteuser(used){
    console.log(used);
    return this.http.delete(this.url+"user/"+used).subscribe(
      d=>{
        console.log(d);
        location.reload();

      }
    )
    
  }

  edituser(userid){
   
    return this.http.get(this.url+"user/"+userid).subscribe(
      d=>{
        console.log(d);
        this.user.setData(d);
        //location.replace("/Dashboard/edituser");
        //location.href="/Dashboard/edituser"
        this.router.navigate(["/Dashboard/edituser"]);
      }
    )
  }



}
