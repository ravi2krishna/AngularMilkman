import { UsersComponent } from './../users/users.component';

import { Injectable } from '@angular/core';




@Injectable()
export class Users{
    data:any;
    setData(dat:any){
        this.data = dat;
        console.log(this.data);
    }
    getData(){
        console.log(this.data);
        return this.data;
        
    }

}